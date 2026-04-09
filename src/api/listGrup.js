import { url } from "./config.json";

const ListGrupApi = async (kategori, negara) => {
  try {
    const res = await fetch(
      `${url}/list?kategori=${kategori}&negara=${negara}`,
    );
    return await res.json();
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      ok: false,
    };
  }
};

export default ListGrupApi;
