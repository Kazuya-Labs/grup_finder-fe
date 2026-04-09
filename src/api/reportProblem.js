import { url } from "./config.json";
const Report = async (payload) => {
  try {
    const res = await fetch(url + "/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(res);
    return await res.json();
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      ok: false,
    };
  }
};

export default Report;
