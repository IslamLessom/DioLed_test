import express from "express";
const categoryRouter = express.Router();

// Пример маршрута для получения всех категорий
categoryRouter.get("/", (req, res) => {
  // Логика для получения всех категорий
  res.send("List of categories");
});

// Пример маршрута для создания новой категории
categoryRouter.post("/", (req, res) => {
  // Логика для добавления новой категории
  res.send("Category created");
});

// Пример маршрута для получения категории по ID
categoryRouter.get("/:id", (req, res) => {
  const categoryId = req.params.id;
  // Логика для получения категории по ID
  res.send(`Category with ID ${categoryId}`);
});

export default categoryRouter;
