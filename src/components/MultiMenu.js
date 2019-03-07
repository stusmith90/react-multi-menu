import React from "react";

const MultiMenu = props => {
  const itemsList = props.menuItems.navItems;
  const menuList = itemsList.map(list => {
    if (list.submenu !== null) {
      let getSubMenu = list.submenu;

      return (
        <div>
          <div className="NavSecond">
            <li>{list.title}</li>
            {getSubMenu.map(subTitle => {
              let secondSubMenu = subTitle.submenu;

              return (
                <>
                  <div className={subTitle.class}>
                    <div className="MainSubNav">
                      <div className="FirstSubNavContainer">
                        <div className="FirstSubNav">
                          <li>{subTitle.title}</li>
                        </div>
                        <div className="SecondSubNav">
                          {secondSubMenu.map(subSecondTitle => {
                            return <li>{subSecondTitle.title}</li>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Nav">
            <li>{list.title}</li>
          </div>
        </div>
      );
    }
  });
  return <div className="multi-nav">{menuList}</div>;
};
export default MultiMenu;
