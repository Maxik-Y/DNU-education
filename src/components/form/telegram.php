<?php

$data = json_decode(file_get_contents("php://input"), true);
$name = $email = $phone = '';
if (isset($data['name'], $data['email'], $data['phone'])) {
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];    echo json_encode(['message' => 'Дані отримано успішно']);
  }else {
    echo json_encode(['error' => "Не всі обов'язкові поля були вказані"]);
}
$token = "7015635706:AAHTEG7ivalXlTXMHekKoi91gTNsO-D5Zg8";
$chat_id = "-4190217342";
$arr = array(
  "Ім'я користувача: " => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo('Success');
} else {
  echo "Error";
}
?>