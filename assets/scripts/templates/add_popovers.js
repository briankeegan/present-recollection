const addPopovers = function(items, name) {
  const captilize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  items.forEach(item => {
    $(`[data-toggle="popover-${item.id}"]`).popover({
      placement: 'auto bottom',
      html: 'true',
      title: 'Are you sure?',
      content: `<div class="btn-group">
  <button data-id="${item.id}" type="button" class="${name}-delete btn btn-danger btn-sm">Delete ${captilize(name)}</button>
  <button type="button" class="btn btn-default btn-sm">Nevermind</button>
</div>`
    })
  })
}

module.exports = addPopovers
