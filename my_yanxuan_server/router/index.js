const  KoaRouter  = require('koa-router')
const router = new KoaRouter()


// 主页index数据
const indexData = require('../datas/index.json')
router.get('/getIndexData',(ctx)=>{
	ctx.body = indexData
})

// 主页分页数据
const indexCateList = require('../datas/indexCateList.json');
router.get('/getindexCateList', (ctx) => {
	ctx.body = indexCateList;
});


// 分类页数据
const categoryDatas = require('../datas/categoryDatas.json');
router.get('/getCateGoryDatas', (ctx) => {
	ctx.body = categoryDatas;
});

// 值得买页数据
const buyDatas = require('../datas/plus.json');
router.get('/getBuyDatas', (ctx) => {
	ctx.body = buyDatas;
});
module.exports = router