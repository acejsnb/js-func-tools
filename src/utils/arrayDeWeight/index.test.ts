import ArrayDeWeight from '.';

test('ArrayDeWeight 数组去重', () => {
    const arr = [
        {id: '1', name: '1', func: () => {console.log(123);}},
        {id: '1', name: '2'},
        {id: '3', name: '3'}
    ];
    expect(ArrayDeWeight(arr, 'id')).toEqual(ArrayDeWeight(arr, 'id'));
});
