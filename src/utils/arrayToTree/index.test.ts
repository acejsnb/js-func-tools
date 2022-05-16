import arrayToTree from '.';

test('arrayToTree 数组转树形结构', () => {
    const arr = [
        {'id': 1, 'name': '一级1', 'parentId': -1},
        {'id': 121, 'name': '二级1', 'parentId': 1},
        {'id': 1211, 'name': '三级1', 'parentId': 121},
        {'id': 1212, 'name': '三级2', 'parentId': 121},
        {'id': 122, 'name': '二级2', 'parentId': 1},
        {'id': 2, 'name': '一级2', 'parentId': -1},
        {'id': 221, 'name': '二级21', 'parentId': 2},
        {'id': 222, 'name': '二级22', 'parentId': 2}
    ];

    expect(arrayToTree(arr, -1)).toEqual(arrayToTree(arr, -1));
});
