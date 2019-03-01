describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "bcdefghijk" para "ABCDEFGHIJ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJ', 33), 'bcdefghijk');
    });

    it('debería retornar "¤¥¦" para "¡¢£" con offset 3', () =>{
      assert.equal(cipher.encode('¡¢£', 3), '¤¥¦');
    });

    it('debería retornar "ÄÅÆ" para "ÁÂÃ" con offset 3', () =>{
      assert.equal(cipher.encode('ÁÂÃ', 3), 'ÄÅÆ');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJ" para "bcdefghijk" con offset 33', () => {
      assert.equal(cipher.decode('bcdefghijk', 33), 'ABCDEFGHIJ');
    });

    it('debería retornar "¡¢£" para "¤¥¦" con offset 3', () =>{
      assert.equal(cipher.decode('¤¥¦', 3), '¡¢£');
    });

    it('debería retornar "ÁÂÃ" para "ÄÅÆ" con offset 3', () =>{
      assert.equal(cipher.decode('ÄÅÆ', 3), 'ÁÂÃ');
    });
  });

});
