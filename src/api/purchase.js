export const createTask = async (purchase) => {
  try {
    const response = await fetch(
        "https://prisma-i9cg.onrender.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchase),
    });

    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};
