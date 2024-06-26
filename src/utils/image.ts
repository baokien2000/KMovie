export async function getBase64(file: File) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          const base64Data = reader.result?.toString().split(",")[1] || "";
          resolve(base64Data);
      };
      reader.onerror = reject;
  });
}