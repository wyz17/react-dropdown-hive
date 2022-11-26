import React, { useState } from 'react';
import selectAll from '.././logo/select-all.png';
import close from '.././logo/close.png';
import './Dropdown.css';

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id,
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  /**
   * Clear selection or Select all items
   */
  function clearSerlectionOrSelectAll(event) {
    // Stop toggle dropdown
    event.stopPropagation();
    if (multiSelect) {
      if (selection && selection.length !== 0) {
        setSelection([]);
      } else {
        setSelection(items);
      }
    } else {
      setSelection([]);
    }
  }

  /**
   * Get selected values, concat them as text
   */
  function getSelectionValues() {
    if (selection.length !== 0) {
      return selection
        .reduce(function (res, item) {
          return res + ', ' + item.value;
        }, '')
        .substring(1);
    }
  }

  return (
    <div className='dd-wrapper'>
      <div className='dd-content' onClick={() => toggle(!open)}>
        <div tabIndex={0} className='dd-content-header' title={title}></div>
        <div className='dd-content-container'>
          <div className='dd-content-title' onClick={() => toggle(!open)}>
            <div className='dd-content-title-hidden'>
              {getSelectionValues()}
            </div>
          </div>

          <div className='dd-content-select-all'>
            {multiSelect ? (
              <img
                src={selectAll}
                onClick={(e) => clearSerlectionOrSelectAll(e)}
                alt='logo'
              />
            ) : (
              <img
                src={close}
                onClick={(e) => clearSerlectionOrSelectAll(e)}
                alt='logo'
                className={selection.length === 0 ? 'hidden' : ''}
              />
            )}
          </div>

          <div>
            <div className={open ? 'arrow-top' : 'arrow-bottom'}></div>
          </div>
        </div>
      </div>

      {open && (
        <ul className='dd-list'>
          {items.map((item) => (
            <li
              className={
                isItemInSelection(item)
                  ? 'dd-list-item-selected'
                  : 'dd-list-item'
              }
              key={item.id}
            >
              <button type='button' onClick={() => handleOnClick(item)}>
                <input
                  type='checkbox'
                  checked={isItemInSelection(item)}
                  onChange={() => {}}
                  className={multiSelect ? '' : 'single-select'}
                ></input>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
