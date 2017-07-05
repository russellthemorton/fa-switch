
**fa-switch** is an AngularJS directive that animates the transitions between two [font awesome icons](http://fontawesome.io/icons/). Use the AngularJS directive or take the `fa-switch.css` file and add the functionality for your own project. 

![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/shrink-grow-rotate.gif)

## Installation

```bash
$ bower install fa-switch --save
```

## Usage

Example:
 ```html
 	<fa-switch  start-icon="check" 
			    end-icon="times"
			    animation-type="rotate"
			    icon-state="{{vm.rotate180}}">
		</fa-switch>
  ```
  
Use the name of your start font awesome icon inside `start-icon=""` and the name of the end icon inside `end-icon=""` For example `start-icon="check" end-icon="times"` Do not include the `fa-` part of the icon name. `fa fa-` has been included already.
  
  Use one of the following in `animation-type=""` to select the style of animation.
 
  `shrink-grow-rotate` 
  
![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/shrink-grow-rotate.gif) 
  
  `shrink-grow`
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/shrink-grow.gif)
  
  `rotate`
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/rotate.gif)
  
  `rotate360`
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/rotate360.gif)
  
  `flip-horizontal`
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/flip-horizontal.gif)
  
  `flip-vertical`
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/flip-vertical.gif)
  
  `out-in` 
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/in-out.gif)
  
  `bounce` 
  
  ![alt text](https://github.com/russellthemorton/fa-switch/blob/gh-pages/img/gif/bounce.gif)
  

`icon-state=""` is your toggle for whether the start state is `true` or `false` inside `{{ }}`.
