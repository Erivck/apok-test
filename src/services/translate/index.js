import { TRANSLATE_API_KEY } from "../../config";

const API_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

const options = {
  method: 'POST',
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": TRANSLATE_API_KEY,
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
  },
};


export const translate = async (text, target) => {
  const params = new URLSearchParams({
    "source": "en",
    "target": target,
    "q": text
  });

  const response = await fetch(API_URL, {
    ...options,
    body: params,
  });
  const result = await response.json();

  console.log(result?.data?.translations[0]?.translatedText);

  return result?.data?.translations[0]?.translatedText;
};