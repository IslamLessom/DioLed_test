import { Request, Response } from "express";
import { ApplicationForm } from "../models/form";

export const getApplicationForms = async (req: Request, res: Response) => {
  try {
    const forms = await ApplicationForm.findAll();
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const postApplicationForm = async (req: Request, res: Response) => {
  const { name, phone_number, preferred_call_time, description } = req.body;
  try {
    const newForm = await ApplicationForm.create({
      name,
      phone_number,
      preferred_call_time,
      description,
    });
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const getApplicationFormById = async (req: Request, res: Response) => {
  const formId = parseInt(req.params.id);
  try {
    const form = await ApplicationForm.findByPk(formId);
    if (form) {
      res.status(200).json(form);
    } else {
      res.status(404).json({ message: "Заявка не найдена" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const editApplicationForm = async (req: Request, res: Response) => {
  const formId = parseInt(req.params.id);
  const { name, phone_number, preferred_call_time, description } = req.body;
  try {
    const [updated] = await ApplicationForm.update(
      { name, phone_number, preferred_call_time, description },
      { where: { id: formId } }
    );
    if (updated) {
      const updatedForm = await ApplicationForm.findByPk(formId);
      res.status(200).json(updatedForm);
    } else {
      res.status(404).json({ message: "Заявка не найдена" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const deleteApplicationForm = async (req: Request, res: Response) => {
  const formId = parseInt(req.params.id);
  try {
    const deleted = await ApplicationForm.destroy({ where: { id: formId } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Заявка не найдена" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};
