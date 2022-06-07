import * as envUtils from 'utils/env';

describe("getEnv", () => {
  it('开发环境', () => {
    // jest.spyOn第一个参数是一个对象，想要mock一个函数，就要先让这个函数在要一个对象里，
    // 如果函数没有在一个对象里，那就再导入时使用* as xx处理
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('dev')

    expect(envUtils.getEnv()).toEqual('dev')
  })

  it('正式环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('prod')

    expect(envUtils.getEnv()).toEqual('prod')
  })
});