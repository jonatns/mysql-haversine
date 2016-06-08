exports.query = function(distance, table, current_lat, current_lon, order_by) {

  if (distance === undefined) {
    console.log('Distance missing');
    return
  }
  if (table === undefined) {
    console.log('table misisng');
    return
  }
  if (current_lat === undefined) {
    console.log('Current latitude misisng');
    return
  }
  if (current_lon === undefined) {
    console.log('Current longitude misisng');
    return
  }
  if (order_by === undefined) {
    console.log('Order by missing');
    return
  }

  var order = order_by.toUpperCase();

  console.log(order);

  if(typeof distance !== 'number') {
    console.log('The distance must me a number');
    return
  }
  if(typeof table !== 'string') {
    console.log('The table name must me a string');
    return
  }
  if(typeof order !== 'string') {
    console.log('Order by must be a string. Ex. ASC or DESC');
    return
  }
  if(distance < 0) {
    console.log('The distance must be greater than zero');
    return
  }
  return 'SELECT *, (3959 * acos (cos ( radians('+parseFloat(current_lat)+') ) * cos( radians(latitude) ) * cos( radians(longitude) - radians('+parseFloat(current_lon)+')) + sin( radians('+current_lat+') ) * sin( radians( latitude ) ))) AS distance FROM ' + table + ' HAVING distance < ' + distance + ' ORDER BY distance ' + order + ';';
}
