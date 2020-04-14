let data = [{ title: '苹果' }, { title: '香蕉' }];
export default {
  'get /api/goods': function(req, res) {
    setTimeout(() => {
      res.json({ result: data });
    }, 250);
  }
};
