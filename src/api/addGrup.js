import { url } from "./config.json";

const AddGrupApi = async (payload) => {
  try {
    const res = await fetch(url + "/addgrup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      ok: false,
      message: "Internal server error",
    };
  }
};

export default AddGrupApi;
