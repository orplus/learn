using System;
using System.Collections.Generic;
using System.Text;

namespace Trial.Models
{
    public enum MenuItemType
    {
        Browse,
        About
    }
    public class HomeMenuItemModel
    {
        public MenuItemType Id { get; set; }

        public string Title { get; set; }
    }
}
