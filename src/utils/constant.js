
export const BAF_COLOR_BLUE = '#002f5f';
export const BAF_COLOR_YELLOW = '#F8AF34';
export const BORDER_COLOR = '#A6AAB4';
export const BG_COLOR = '#05B6D3';
//NOTE: API nya masih local jadi nanti ketika pindah network api address nya harus di ganti
export const API_NUSA = 'http://192.168.1.10:3000/api/v1/';

export async function filterFetch(url, options) {
  try {
    return await fetch(url, options)
      .then((res) => {
        console.log("res " , res.status)
        if (res.status !== 401 && res.status !== 200 && res.status !== 404) {
          if (res.status == 503) {
            throw new Error(
              `${res.status}: Maaf, terdapat masalah pada jaringan Anda. Silahkan coba kembali.`,
            );
          } else {
            throw new Error(
              `${res.status}: Maaf, terjadi gangguan pada sistem kami. Silahkan coba beberapa saat lagi.`,
            );
          }
        } else {
          return res.json();
        }
      })
      .then((json) => {
        const response = json.response ?? json.status;
        if (response == 401) {
          throw new Error(JSON.stringify(json));
        } else if (response == 404) {
          throw new Error(`404: ${json.message}`);
        } else if (response != 200) {
          throw new Error(json.message || 'Error API fetch data');
        }
        return json.result;
      });
  } catch (error) {
    const errorMessage = error.message;
    if (errorMessage == 'Network request failed') {
      throw new Error(
        `Maaf, terdapat masalah pada jaringan Anda. Silahkan coba kembali.`,
      );
    } else {
      throw new Error(error.message);
    }
  }
}