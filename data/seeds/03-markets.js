const markets = [
  {user_id: 1, market_name:"market1"},
  {user_id: 2, market_name:"market2"},
  {user_id: 3, market_name:"market3"},
  {user_id: 4, market_name:"market4"},
  {user_id: 5, market_name:"market5"},
]

exports.markets = markets

exports.seed = function(knex) {
  return knex('markets').insert(markets)
};
