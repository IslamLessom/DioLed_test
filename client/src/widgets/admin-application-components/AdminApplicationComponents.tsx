import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AdminApplicationComponents.module.scss";
import { TiDeleteOutline } from "react-icons/ti";

interface ApplicationType {
  id: string;
  name: string;
  phone_number: string;
  preferred_call_time: string;
  description: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AdminApplicationComponents = () => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get<ApplicationType[]>(
        `${apiUrl ? apiUrl + "/" : ""}form`
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();

    // Устанавливаем интервал для периодического обновления данных
    const intervalId = setInterval(fetchApplications, 3000); // Обновление каждые 30 секунд

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const deleteApplication = async (id: string) => {
    try {
      await axios.delete(`${apiUrl ? apiUrl + "/" : ""}form/${id}`);
      setApplications(applications.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <div className={styles.container}>
      {applications.map((app: ApplicationType) => (
        <div key={app.id} className={styles.container_application}>
          <div className={styles.container_application_nameblock}>
            <h2 className={styles.container_application_name}>{app.name}</h2>
            <TiDeleteOutline onClick={() => deleteApplication(app.id)} />
          </div>
          <p>Номер телефона - {app.phone_number}</p>
          <p>Звонок на - {app.preferred_call_time}</p>
          <p>Описание - {app.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminApplicationComponents;
