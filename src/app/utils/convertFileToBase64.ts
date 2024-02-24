export function convertImageToBase64(image: Blob | string): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve(base64String);
      };
      reader.onerror = (error) => {
          reject(error);
      };
      if (typeof image === 'string') {
          fetch(image)
              .then(response => response.blob())
              .then(blob => {
                  reader.readAsDataURL(blob);
              })
              .catch(error => reject(error));
      } else {
          reader.readAsDataURL(image);
      }
  });
}
