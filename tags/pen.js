const InputTag = () => {
  // Using the State hook to declare our tags variable and setTags to update the variable.
  const [tags, setTags] = React.useState([
  'Tags',
  'Input']);


  const removeTag = i => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };

  const inputKeyDown = e => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };


  return /*#__PURE__*/(
    React.createElement("div", { className: "input-tag" }, /*#__PURE__*/
    React.createElement("ul", { className: "input-tag__tags" },
    tags.map((tag, i) => /*#__PURE__*/
    React.createElement("li", { key: tag },
    tag, /*#__PURE__*/
    React.createElement("button", { type: "button", onClick: () => {removeTag(i);} }, "+"))), /*#__PURE__*/


    React.createElement("li", { className: "input-tag__tags__input" }, /*#__PURE__*/React.createElement("input", { type: "text", onKeyDown: inputKeyDown, ref: c => {tagInput = c;} })))));



};

ReactDOM.render( /*#__PURE__*/
React.createElement(InputTag, null),
document.getElementById('content'));