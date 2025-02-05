import React from "react";
import PropTypes from "prop-types";


export default function File({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        
        <svg
        fill="grey"
        width="150"
        height="170"
        viewBox="0 0 210 297"
        xmlns="http://www.w3.org/2000/svg"
       ><defs
          id="defs1" /><g
          
          id="layer1"><image
            width="59"
            height="73"
            preserveAspectRatio="none"
            style={{ imageRendering: 'optimizeQuality' }}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABYCAYAAABMB1FSAAAAAXNSR0IArs4c6QAAAARnQU1BAACx&#10;jwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAAfiSURBVHhe7ZrJT1RLFMYPCqgIgjgzKA6oOAHG&#10;RBdEE3TFisS/EjZuXLKBBQtHRAUEB1AQBwbBCQd47/1OOORaj6K7b/ft5uXVl5zc5o5VX31nqCqK&#10;/voHErCGLavHgFUEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwEQhwE&#10;QhwEQhwEQhwEQhwEQhwEQhwEQhwEQhxkvVHF48vLy2r8LioqWr2SHuyZkpIS2bKl8OMTmxAj4tev&#10;X/L9+3f58eOHrKysaOfSJYV3YBBRUVEh5eXlq1cKh7QJ+fnzp3z+/Fm+fv0qS0tLSgBkcN7+5lWZ&#10;KgQSt27dKjt37lRCtm/frsZvzpWWluZVOWkT8uHDB3ny5ImMj4/L4uKifPv2bY0Uc5e4gEQ6Ted3&#10;7Nghu3fvlmPHjsmpU6dk3759ei5fSEkI7jA/Py+vXr2Shw8fyuvXr9fUgJki0lEG95jZ84CjEQsx&#10;KOPIkSNKSENDg9TW1uq5fGBDQrj05s0befDggTx79kympqaUjOrqatmzZ49UVlZqQ62DPtg1UwEu&#10;QudxF+z379/qiihvYWFBXRPgNk1NTXLlyhUlJR/u4yWEEaNhw8PD0tfXp65CxyGBUaurq1M502jO&#10;0zEfuA7oOIrjWFxcrJmFTnIdQlAirvnu3TuZnp6WT58+qVLa2tpULQcOHJBt27bpu5KCl5C5uTl5&#10;/vy5PH36VAYHBzVwHj16VH0bO3jwoAY/RjuVQrgHe//+vdy/f18+fvyoCqupqdGRR3EQSlyCmNnZ&#10;2bXv8t7Dhw/LuXPn5PLlyxpfkoRXfzSMeIGbQMauXbuksbFRmpubVcZ0ho6gGK5x9BkqIjAyuoz+&#10;2NiYKoBvoBKer6qq0ne63wCokxgGYUnDSwjpFJ8mZhAnkCvyxVXiRn1GG5f58uWLGh0klrjg/Xzv&#10;+PHj6pa4L22BwKThJcQCHUeKpv3796tlkwItkHKEcIzOrgdUY3GKQIpKLdVv5J7ZYkOFEPFpBIEP&#10;lSDvbEG8oYNmvndCvLka9zEwtAWFraeqXCGlQhgZAiKkZAs6RhzB+I1afApBBZCF2b0MEgrZKKNl&#10;Cy8hNIgPc2RULXVmAzpGZqKTkP327VvNZKOjozIxMbEWxDlPyreBsG9be5KElxAQJSIXDaH2sKyD&#10;8uj80NCQFn6PHj3S3yMjI5qFSM0A8qwN0fYkBS8h0Q/nalRQh81RSLOQMjk5qTUHhGBGDhUyLpI0&#10;AS42VEiuUVZWJqdPn5bW1lYttgiY5jrUGeY+VqdAWHQw8kFOXgkhJpDCKbggpqWlRe3ChQty/vx5&#10;rUbPnj2rRdmhQ4fUxZIMoOvBW7ozs+3q6tL5BQUSDb106ZIWTNmCtMnokzH4HW0CgRdwHvXQjt7e&#10;XiXyxo0bcubMGS3fc5H11kNeFWJAKdQ1lP4UXlb0YXv37l0zX42SJApCSDqgDspVMM8EWRGCf1NY&#10;IW2m6rgXRzP+xqgpuC+TDuaj5lgPsQmhsXSS8v7ly5eaLu/evavTe7N79+7pOWoLlhMKNeqZICtC&#10;mFfQUabnrLc+fvxYj9QVGH+zpmGFlm92u5kQmxAkzZScGgKFsMSIEuwY/Q0hFFos/FBsbWZkFUMY&#10;bdyAgskmYqRDM/ubrMK9mcaRQiB2HYJCCJYWPIklnLM6AvBqjBRLeqVcp56g4EoF3JH1VeJQPuuQ&#10;ghRm6aBQhGTlMnEA/yipUGk1FXJCCNmDbDMzM6OBk98bmdUnGIEZNRCLNgO8LkNd0d3drR04ceLE&#10;v1yGIAkByJrtBe7jHAE0HfBZ4o1N+FhtZ7/HAEmkauqYTRFDjBBfDCF9klKpN168eKHpl1FOJ2AC&#10;I4QMxRymvb1dN6QMhSLE6zI0lNEzi2YPwHWboFn2YCWMYzpm97KCxgq7uyMHYdE4w9EsSXgVwqrV&#10;rVu31BWQMmsUFy9e/CPtMopcZz2Ula84CmGkIRQVsmhkYN+GTS2yTH9/v5J3/fp1VQiDkHeXwRVu&#10;376tjUKiJ0+elGvXrunCjQFSWNewQBonhkAgK2e2C2jgfVTApH/cl+WAjo4OJQRlpkt8pvASQrnd&#10;09OjjWIhhxHs7OzU3bsoIAVlQAavynSZj/stuEbJRHEDAwM6H2Jpke/evHlTleq6by7hfTMLwgQ7&#10;Ro0ASoCjkUiZzhtM9owya6YcMzG+w/NRMlAdmYv5DxUw70WlKCNJMoD37TSCnXl2+ZEnEmYmi4Rp&#10;bJSUXAI1QjyZyza4iVu0hTYlDa/LWOnMjPXOnTuqENRCDKFmqK+v10zB6CJ7z2tSIvqsKRFl8H8p&#10;uAoZiEVoXAXjm0nCSwinmZ0yWmQcGsfWAI0mAEb/gwgZxyWEZ1Ebq25MFqlccUuOfB/yr169qjGM&#10;7yW9zuolxIBkkS77JWQeSOERlMFoEQdAXBeKEsK3CNDEE+oS4gYFIf9ShTIzDdhxkJIQLtNY3Ae/&#10;ZvuReMI5MgyG36Mc7s200fYMcQoSiBMogbjB/g1GcDfik0ZKQgyMos1bMGoP4gwZgZG1XbZMCYFQ&#10;FEHhRYGG4ZIQQSAlC+UTaRMCUAKdRx2QgY8jcY4QFocQewYXpPMYasAdiU/5RkaE/B+QbJXzH0Qg&#10;xEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEgxEEg5A+I/A1dRuil&#10;yviNowAAAABJRU5ErkJggg==&#10;"
            id="image1-1"
            x="93.238029"
            y="108.11494" /></g></svg>
     

    );
  }


  File.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  File.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  