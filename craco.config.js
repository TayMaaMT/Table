const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#6D5BD0' ,
              '@text-color': '#25213B',
              '@border-radius-base': '5px',
              '@border-color-base' : '#C6C2DE',
              '@border-color-split':'#C6C2DE',
              '@background-color-base':'#F4F2FF',
              '@background-color-active':'#F4F2FF',
              '@background-color-hover':'#F4F2FF',
              '@layout-header-background': '#F4F2FF',
              '@item-active-bg': '#F4F2FF',
              '@item-hover-bg': '#F4F2FF',
              '@form-item-trailing-colon': 'false',
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};