function tratarErroElancar(erro) {
  //throw new Error('Ocorreu uma falha no código...')
  //throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUppercase() + '!!!');
  } catch (e) {
    tratarErroElancar(e);
  } finally {
    console.log('final');
  }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);
