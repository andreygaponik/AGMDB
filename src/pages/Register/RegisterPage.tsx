import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const handleRegister = async () => {
    const email = `test${Date.now()}@example.com`;
    const password = "123456";

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      alert(`User created: ${userCredential.user.email}`);
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <button
      onClick={handleRegister}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Зарегистрировать тестового пользователя
    </button>
  );
};

export default RegisterPage;
