const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  describe("Métodos de String", () => {
    test("Deve inverter uma string corretamente", () => {
      expect(utilitarios.inverterString("hello")).toBe("olleh");
    });

    test("Deve contar os caracteres de uma string", () => {
      expect(utilitarios.contarCaracteres("world")).toBe(5);
    });

    test("Deve converter toda a string para maiúscula", () => {
      expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
    });

    test("Deve converter toda a string para minúscula", () => {
      expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    });

    test("Deve colocar a primeira letra em maiúsculo", () => {
      expect(utilitarios.primeiraLetraMaiuscula("exemplo")).toBe("Exemplo");
    });

    test("Deve remover espaços do início e do fim", () => {
      expect(utilitarios.removerEspacos("  espaços  ")).toBe("espaços");
    });

    test("Deve repetir o texto o número de vezes especificado", () => {
      expect(utilitarios.repetirTexto("abc", 3)).toBe("abcabcabc");
    });

    test("Deve contar o número de palavras", () => {
      expect(utilitarios.contarPalavras("isto é um teste")).toBe(4);
    });

    test("Deve verificar se uma string é um palíndromo", () => {
      expect(
        utilitarios.ehPalindromo("A man a plan a canal Panama")
      ).toBeTruthy();
      expect(utilitarios.ehPalindromo("nao e palindromo")).toBeFalsy();
    });
  });

  describe("Métodos de Matemática", () => {
    test("Deve somar dois números", () => {
      expect(utilitarios.somar(5, 10)).toBe(15);
    });

    test("Deve subtrair dois números", () => {
      expect(utilitarios.subtrair(10, 5)).toBe(5);
    });

    test("Deve multiplicar dois números", () => {
      expect(utilitarios.multiplicar(5, 5)).toBe(25);
    });

    test("Deve dividir dois números", () => {
      expect(utilitarios.dividir(10, 2)).toBe(5);
    });

    test("Deve lançar um erro ao dividir por zero", () => {
      expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");
    });

    test("Deve verificar se um número é par", () => {
      expect(utilitarios.ehPar(2)).toBeTruthy();
      expect(utilitarios.ehPar(3)).toBeFalsy();
    });

    test("Deve gerar um número aleatório menor que o máximo", () => {
      const max = 50;
      const randomNumber = utilitarios.gerarNumeroAleatorio(max);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(max);
    });
  });

  describe("Métodos de Array", () => {
    const arr = [1, 2, 3, 4, 5];
    const arrDuplicado = [1, 2, 2, 3, 4, 4, 5];

    test("Deve retornar o primeiro elemento do array", () => {
      expect(utilitarios.primeiroElemento(arr)).toBe(1);
    });

    test("Deve retornar o último elemento do array", () => {
      expect(utilitarios.ultimoElemento(arr)).toBe(5);
    });

    test("Deve retornar o tamanho do array", () => {
      expect(utilitarios.tamanhoArray(arr)).toBe(5);
    });

    test("Deve ordenar o array", () => {
      const desordenado = [3, 1, 5, 2, 4];
      expect(utilitarios.ordenarArray(desordenado)).toEqual(arr);
    });

    test("Deve inverter o array", () => {
      expect(utilitarios.inverterArray(arr)).toEqual([5, 4, 3, 2, 1]);
    });

    test("Deve juntar os elementos de um array com um separador", () => {
      const letras = ["a", "b", "c"];
      expect(utilitarios.juntarArray(letras)).toBe("a,b,c");
      expect(utilitarios.juntarArray(letras, "-")).toBe("a-b-c");
    });

    test("Deve calcular a média dos números em um array", () => {
      expect(utilitarios.mediaArray(arr)).toBe(3);
      expect(utilitarios.mediaArray([])).toBe(0);
    });

    test("Deve remover elementos duplicados de um array", () => {
      expect(utilitarios.removerDuplicados(arrDuplicado)).toEqual(arr);
    });
  });

  describe("Métodos Utilitários Gerais", () => {
    test("Deve verificar se o valor é um número", () => {
      expect(utilitarios.ehNumero(123)).toBeTruthy();
      expect(utilitarios.ehNumero("texto")).toBeFalsy();
      expect(utilitarios.ehNumero(NaN)).toBeFalsy();
    });

    test("Deve mesclar dois objetos", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
    });
  });
});
