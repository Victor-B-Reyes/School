import axios from "axios";
import { url, TELEGRAM_TOKEN } from "../environments/environments";


export const sendTelegramMessage = async (data) => {
  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "944356149",
        text: data,
        parse_mode: "HTML",
      }),
    }
  );

  return response.json();
};