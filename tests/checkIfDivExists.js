describe('getDiv', function() {
	var d = document.querySelector('.box');

	it('should exist', function() {
		expect(d.nodeName).toBe('DIV');
	})
});