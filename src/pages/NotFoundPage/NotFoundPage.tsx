import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h1 className="text-6xl md:text-9xl font-black text-red-600">404</h1>
      <p className="mt-4 text-2xl md:text-3xl font-semibold">
        Страница не найдена
      </p>
      <p className="mt-2 text-lg text-neutral-400">
        Извините, мы не можем найти страницу, которую вы ищете.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg transition hover:bg-red-700"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
