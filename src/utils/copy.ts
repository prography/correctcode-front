export const copy = (text: string) => {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length); // hack

    document.execCommand('copy');
    document.body.removeChild(textarea);

    return Promise.resolve(text);
  } catch (err) {
    return Promise.reject(err);
  }
};
