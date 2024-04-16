<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные отзыва и рейтинга
    $review = $_POST["review"];
    $rating = $_POST["rating"];

    // Электронная почта, на которую будут отправлены данные
    $to = "nestwedman@gmail.com";
    // Тема письма
    $subject = "Отзыв о качестве обслуживания";
    // Тело письма
    $body = "Рейтинг: $rating\nОтзыв: $review";

    // Отправляем письмо
    $success = mail($to, $subject, $body);

    if ($success) {
        echo "Спасибо за ваш отзыв, можете идти нахуй";
    } else {
        echo "Ошибка при отправке отзыва.";
    }
} else {
    // Если запрос не является POST, возвращаем ошибку
    http_response_code(405);
    echo "Метод запроса не поддерживается.";
}
?>
