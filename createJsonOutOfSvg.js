const svgson = require('svgson');
const fs = require('fs');

fs.readFile('./svgs/msRefresh.svg', 'utf-8', function(err, data) {
  svgson(
    data,
    {
      svgo: true,
      title: 'myFile',
      pathsKey: 'myPaths',
      customAttrs: {
        foo: true,
      },
    },
    function(result) {
      console.log(result)
    }
  )
})