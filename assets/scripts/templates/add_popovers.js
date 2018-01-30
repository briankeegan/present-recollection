const addPopovers = function (items, name) {
  items.forEach(item => {
    $(`[data-toggle="popover-${item.id}"]`).popover({
      placement: 'bottom',
      html: 'true',
      title: 'Are you sure?',
      content: `<div class="btn-group">
  <button data-id="${item.id}" type="button" class="${name}-delete btn btn-danger btn-sm">Delete Gift</button>
  <button type="button" class="btn btn-default btn-sm">Nevermind</button>
</div>`
    })
  })
}

module.exports = addPopovers
