import axios, { AxiosResponse } from "axios";

// Определяем интерфейсы для данных пользователя
interface LoginResponse {
  token: string; // Предположим, что сервер возвращает токен
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

interface RegisterResponse {
  message: string; // Сообщение о результате регистрации
}

// Определяем типы для параметров функций
type LoginParams = {
  username: string;
  password: string;
};

type RegisterParams = {
  username: string;
  email: string;
  password: string;
};
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async ({
  username,
  password,
}: LoginParams): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `http://188.225.77.249:3001/login`,
      {
        username,
        password,
      }
    );

    return response.data; // Возвращаем данные из ответа
  } catch (error: any) {
    // Обработка ошибок
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Ошибка входа");
    } else if (error.request) {
      throw new Error("Сервер не ответил");
    } else {
      throw new Error("Ошибка: " + error.message);
    }
  }
};

export const registerUser = async ({
  username,
  email,
  password,
}: RegisterParams): Promise<RegisterResponse> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      `http://188.225.77.249:3001/register`,
      {
        username,
        email,
        password,
      }
    );

    return response.data; // Возвращаем данные из ответа
  } catch (error: any) {
    // Обработка ошибок
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Ошибка регистрации");
    } else if (error.request) {
      throw new Error("Сервер не ответил");
    } else {
      throw new Error("Ошибка: " + error.message);
    }
  }
};
