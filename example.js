import { TRANSLATE_API_KEY } from "../../config";

const API_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

const options = {
  method: 'POST',
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "de43d88490mshb6d56fcb5fb0bfcp1f2e20jsn03661df5162e",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
  },
};


const translate = async (text, target) => {
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

  return result?.data?.translations[0]?.translatedText;
};


const translateTextArray = async (textArray, target) => {
  const params = new URLSearchParams({
    "source": "en",
    "target": target,
  });

  textArray.forEach((text) => {
    params.append("q", text);
  });

  const response = await fetch(API_URL, {
    ...options,
    body: params,
  });
  const result = await response.json();

  return result?.data?.translations?.map((item) => item.translatedText);
};
