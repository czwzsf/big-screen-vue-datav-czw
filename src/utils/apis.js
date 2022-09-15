/**
 * 用来存放项目中所有接口的地址
 */
const apiHost = 'http://localhost:8080/api'
/**
 * 用户账户接口
 */
const AccountApis = {
    loginUrl: '/',
    logoutUrl: '/'
}
/**
 * 系统模块的接口
 * @type {{sliderListUrl: string}}
 */
const SystemApis = {
    sliderListUrl: apiHost + '/system/slider/list/'
}

/**
 * 图表接口
 */
const ChartApis = {
    bottomLeftUrl: apiHost + '/chart/bottom/bottomLeftChart/',
    bottomRightUrl: apiHost + '/chart/bottom/bottomrightChart/',
    leftoneChart: apiHost + '/chart/centerLeft/leftoneChart/',
    lefttwoChart: apiHost + 'chart/centerLeft/lefttwoChart/',
    rightoneChart: apiHost + 'chart/centerRight/rightoneChart/',
}
export {
    AccountApis,
    SystemApis,
    ChartApis
}
