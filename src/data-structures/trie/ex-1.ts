// Trie
/*

*/

class Trie {
  characters: { [key: string]: Trie };
  isWord: boolean;

  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  addWord(word: string, index = 0, chars = this.characters) {
    if (!chars[word[index]]) {
      chars[word[index]] = new Trie();
    }

    if (index < word.length - 1) {
      this.addWord(word, index + 1, chars[word[index]].characters);
    } else {
      chars[word[index]].isWord = true;
    }
  }

  removeWord(word: string, index = 0, chars = this.characters) {
    if (word[index] != word[word.length - 1]) {
      this.removeWord(word, index + 1, chars[word[index]].characters);
    } else {
      chars[word[index]].isWord = false;
    }

    for (const key in chars[word[index]].characters) {
      return;
    }

    if (chars[word[index]].isWord === false) {
      delete chars[word[index]];
    }
  }

  findWord(word: string, index = 0, chars = this.characters): Trie | undefined {
    if (chars[word[index]] && index < word.length - 1) {
      return this.findWord(word, index + 1, chars[word[index]].characters);
    }

    if (chars[word[index]] && chars[word[index]].isWord) {
      return chars[word[index]];
    }

    return undefined;
  }

  getWords(words: string[] = [], currentWord = "", chars = this.characters) {
    for (const char in chars) {
      const newWord = currentWord + char;

      if (chars[char].isWord) {
        words.push(newWord);
      }

      this.getWords(words, newWord, chars[char].characters);
    }

    return words;
  }

  autoComplete(prefix: string) {
    let selectedChars = this.characters;

    for (let i = 0; i < prefix.length; i++) {
      if (!selectedChars[prefix[i]]) {
        return undefined;
      }

      selectedChars = selectedChars[prefix[i]].characters;
    }

    return this.getWords([], prefix, selectedChars);
  }
}

const newTrie = new Trie();
newTrie.addWord("fun");
newTrie.addWord("funny");
newTrie.addWord("fungus");
newTrie.addWord("hi");
newTrie.addWord("bye");
//console.log(newTrie);
console.log(newTrie.getWords());
console.log(newTrie.autoComplete("fu"));
