export default class Transliterator {
  ru = ['щ', 'Щ', 'ё', 'ж', 'ч', 'ш', 'ъ', 'ы', 'э', 'ю', 'я', 'Ё', 'Ж', 'Ч', 'Ш', 'Ъ', 'Ы', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ь', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ь', '№'];
  en = ['shh', 'Shh', 'yo', 'zh', 'ch', 'sh', '``', 'y`', 'e`', 'yu', 'ya', 'Yo', 'Zh', 'Ch', 'Sh', '``', 'Y`', 'E`', 'Yu', 'Ya', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'x', 'c', '`', 'A', 'B', 'V', 'G', 'D', 'E', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'X', 'C', '`', '#'];

  enToRu(string) {
    return this.replaceArray(this.en, this.ru, string);
  }

  ruToEn(string) {
    return this.replaceArray(this.ru, this.en, string);
  }

  replaceArray(find, replace, replaceString) {
    let newReplaceString = replaceString;
    find.forEach((val, i) => {
      const f = new RegExp(val, 'g');
      newReplaceString = newReplaceString.replace(f, replace[i]);
    });

    return newReplaceString;
  };
}
