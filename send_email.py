"""Send the EduLearning HTML email through Yandex SMTP.

The Yandex app password is requested interactively and is never written to disk.
"""

from __future__ import annotations

import argparse
import getpass
import smtplib
import ssl
from email.message import EmailMessage
from pathlib import Path


SMTP_HOST = "smtp.yandex.ru"
SMTP_PORT = 465
DEFAULT_SENDER = "edulearning@yandex.ru"
DEFAULT_SUBJECT = "Онлайн-курсы EduLearning — английский, NLP и 3D-дизайн"
HTML_FILE = Path(__file__).with_name("edulearning-email.html")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Отправить HTML-письмо EduLearning через Яндекс.Почту")
    parser.add_argument("--from-address", default=DEFAULT_SENDER, help="Адрес отправителя в Яндексе")
    parser.add_argument("--to", required=True, help="Адрес получателя")
    parser.add_argument("--subject", default=DEFAULT_SUBJECT, help="Тема письма")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    html = HTML_FILE.read_text(encoding="utf-8")

    print(f"Отправитель: {args.from_address}")
    print(f"Получатель: {args.to}")
    print(f"Тема: {args.subject}")
    if input("Отправить письмо? [y/N]: ").strip().lower() not in {"y", "yes", "д", "да"}:
        print("Отправка отменена.")
        return

    app_password = getpass.getpass("Пароль приложения Яндекс.Почты: ")

    message = EmailMessage()
    message["From"] = args.from_address
    message["To"] = args.to
    message["Subject"] = args.subject
    message.set_content(
        "Онлайн-курсы EduLearning: английский, NLP и 3D-дизайн. "
        "Подробнее: https://edu-learning.ru/#/"
    )
    message.add_alternative(html, subtype="html")

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context) as smtp:
        smtp.login(args.from_address, app_password)
        smtp.send_message(message)

    print("Письмо успешно отправлено.")


if __name__ == "__main__":
    main()
