import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import ItemListContainer from './components/ItemListContainer.js';
import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {

  const products = [
    {
      title: 'Campera Perez',
      price: '3000',
      description: 'campera abrigada nocturna 100% algodon',
      counter: 0,
      stock: 5,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQEBIVEBAVFQ8VFRUQFRUVFw8QFRUWFxUVFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADkQAAICAAQEAwUHBAICAwAAAAABAhEDEiExBEFRYQVxoRMigZGxFTJSwdHh8EJygvEUYpLSBiNT/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwUE/8QAIxEBAQEAAgEEAgMBAAAAAAAAAAERAhIUAxMhQTFRBFJhYv/aAAwDAQACEQMRAD8A5RCEPdeShCFpElJBpESGJEUihkUUkMijJXFDEiooZFA0uKGRRUYjYxDSuKGxiVGI2MTJSMRsYkjEbGJnWsVGI+ESoRHxiZtOKUQ1EJRDUTNrWBUQ1ENRDUTOnAKIyMQlENRM6VRiGohRiMUQ04BRDUQlENRM2nAKIaiMUQlEza1gYobFEUQ0jNpxTiJxMM1JFSiEqxy5YGpDc4FnTsz1fFiEouj1HnqQaRSQyKAokMSJFDIxApGIxRIojFENaxUUMwtW1zX51SKcdBXBx1vXdtdX2MWtSNkYjoxJFfqNjENOJGI2MSRiNjEzacVGI2MS4xHQiZtaxIRGxiFCAxRM2nAxiGohxiGomdaDGIxRCjENRM6cCohqISiMUTOnAKIaiGohqJm04GMQ1EJRDUTNrQVEJRDUQlENIVEJIJIJIzpCkXQVFpEiXEsblLLVj4XRaiGohKJ7GvNwKiHGIUYjIxDTioxGRiXGIyMQ1rFKIyMS4xDbSVvYzpxTVK9zDjYrzU1yu60XRjeK4xZbg72uuVvuZZRk1Kebb3Vm9X5JN/H5BaY28Nxjcn/VeWkuWmr26nXwqatO/I4kOEc0k3HfrWrX66adTt8BguMcrSSVVl59TFreHxiMjEKMBsYmbTioQHQgXCA6MTFpxUYjFEKMQ4xM2tYFRGRiEojIxM6cBGIxRCURiiZ04BRDUQ1ENRDTgFENRDUQlEzrWAUQ1EJRDUTOnApBJBJFpAlJFpBJF0WkKRaQVF0CDRA6ISfD1EJRDUQ1E9fXn4FRGRiXGIyMTOtYFRGxho3yW5Nh3BY33lt2215Bb8GQrD12JxPDqcdW1WujrXkVxTr7ryrXXv07EwJ2siTfV3vWoacYOI4Fr7jdNK1s21W3b8zNhYsGoOLlSdNPmuTaOvxrqMsRbqlvVJPozz7ikkk7dybf4tr26fmWrHf4GEG3JyTUFmdPkrv5UdfA4yDhn1rT5PSzhLwjEjFNTUk028rStdL0tUdHwbh5Sq17i53euvJ+e6MWxqSu1hK0m1XqOjEuEB0InG8nTFQgOjEuMRkYmexxUYhqIUYjFEzpwMYhqIcYhqIacCohqISiGomdOBUQ1EJRCSDTgVENItIJIzpxSRaQSRdFqUkWkWkWBSi6LISQhZCSEIWSfGfaOsr25diKVck/gSS7i4yp1uvp3PYx5+0+GJHmmvL9ys3R6FOuYLiuQZD2ol3Y2PZen5mOZMNu+vmV4qcmnFnekb+JMHDShmk6S+bfYGUrXp/OpfCxqk1UVSfdeRhr7cfipSebEeantaemrvTktte+pnhh+8kqbbSau8l61X+uR6fI7dJJJ6c9DBxXCqEnNJZajvWa9SRuEobyVKOTVUuetv8AY9PweJmqUZKWE063tNOn/NzyE+LzYaw1FK9Xeumj0XPmHHjMSKyRm4rXWOlrvzRz58d/DfHln5exjxuHbTkotScfeaVtb0nuboo8LwGO44ntE06Tk1Jau2tfPU73Df8AyFP78HF9qaOXP0+X18unHnxv5+HoooZFHNwPF8KW01t/Vp8NTfh4yatNPyZ83K2fmPo48N/B8UMihUZjIzOd9Rr2qakGkKUximHuH2qYkGkKUws5n3D7dNQSE5u5cZdy9wdDkEhSmF7Qe7PUwtC/aF+0HtBhhaF+0L9oXaLDCxXtC/aD2gwwgvOTOOxYYQXnIHaLHyLG4ZJXmpd1+gnh4SkrSrzNUVsnm15rSl/PoFHAy9/LT+eZ6/Z8HVnUGtH5/sLjO9tda/Ubh8O3iN66vav5Yx8DUlJOSa6tu/PXUtXVkxKSt7Ls/oHwjjNXtzSe7RWHHE9pJNSp0szS21vRbbLXuGsNQtRlSvben+RW6pMOik1SVLVtvklzAxNE2nrp8tlQuOPU1rolt18/Q04eHH2dtta6ve223z7hTGXHxtKrnu3y5/zsJxHa25eoGPhSlKqfn7uq00056AQburdbKtMvbrZpkXCYNRp8lX+XXy29RiwgoYlSy7VvpyY7HqK6PXfZVqEs/Bs+yVDSr53pzf8AGOw2lvr5v8wMScY/ea0Sb6Iz4/ERvLdOm0l/VXQfhn5OwU9Let3W/wAOpshxLj915X23ORg4tK1rrFaO+9v4WOliS0TWq95f9lW3RP4mfhqa7/CeM4q+9qtN/wBtjXi+NYq1jhqUbTbzvRbbZficONUntfJqmBDjadK5axXu7K938Dly9D07dx34/wAn1OMzXqcDx+EtJJxfRp/ToM+3cFf1JHl8biE5xw5PVu136IZ/xYNu9b1p8n1ON/iem7z+dz/UeoXj2F+NDF45hfjXqeQjwcXcY1ejrek261+DAxeGcFeat9W63+oeH6bXncv6x7L7dwvx/UtePYX4/RnzfE4/K5W81c60u6pdXdBYfHNzUlpHXMt66f7LwvT/AHWfO5f1j6QvHsL8Xowl47h/i9GeFljNVzu+i2V/sK/5kvwvXpy8w8LgfMv6j6B9uYfV/Iv7cw+vozwMOJm9oN6Xom9OvoR8bJbwfxtF4XAeZf1Hv143h9X8mX9tw6v5HgY+JLnF/CVfkXLxRfhdf3F4XH/V5n+R777bh3+RF43Dv6fqeDh4qvwN+b/RBz8U5PDyvyf5j4XFny/8j3X21DuX9tQ6v5Hg14l29f3Hx4rS8rf+UfpZeFw/1eX/AMx7X7ah1fyIeMWJP8L+cf8A2IXh8P2vKv8AWLpl0wyrPrfKrUq2FmLsiW2zJxOG7ulr6tdzc2CppuufQtFjmThGsy06rXfuOlhx9lc9U/6e62fqJ4yPvNcujD46T9lFQXvpVr0lKOZr4JjRCXKdZs2RJqk0veeySE4mPleRJtyUv/Pda8v3OdxePiRm3Je8mqvWk151zXTma+EwE4OSbzOLafRPV6vbzL8o/g8GV+0cvaK4pppKt2/9GmfDrE96+ctkrSunHy09CQxlDDi+8qjJK9FTuuV0D4VO5t79UuSbe18tWZJGLwTjcszb95vRarpp+hjxMO5qT1aTfvaOCb5d/wBz0+NgKUXF7PeuhyPE8sJdW7d1zei+SVebNS6zZjneF4O8mlu9rVUqd3ytM6Kbl7zdVaa/uem/Y52HN5motZU1a63b189/gdPhoprLN5c109OlU9dy04vD4bEmoy5K83n+m/MLD4TIs0Vh1yeq186eu51sGGVUm6XJ0HOKappNdGjPY9Y5OD4hqumt86f5BLxG8a2moVWq062FxvBf/nhxT5u2vkthGBweIpJ0l8TeSxnbHRhxEJfdf8+Jn8U4mMY1Vy78u4jjcBYaTSzOVqpVJX2VfyhODwGeCbeXW8u3u8g+D8ue8FNW43ajSvlfP4WM4fBy+a5dfh0H8Vg5Fo4vyeqAbilb1XL+7kODWriuIhW2V630V6aPzEYOGppNL71Zb+r9PmKliJp5vuatp7aLkFwnGK1ldNuoVu6W9/zcvpfbW/CHFJ3JzVWqVPe6+Zkl72jkk09G9aXf0N3EeJSSlGV86u7pvoc/Gcsko4ek910tcm+n6jJcFoo8LJ6Rae2W5Cf+Lirb3qtOt1X1HYPFWuVxyvTS+sa1p6MZ7X71NyeuvS7TtdP3IMqWLesXWl/68iOcrpJpVvvrfXbpoaMPDk9bTdvb+6/oPnG4Silq3m+OmnoWLXNhjN81VJq+d8vMPDx1dX1vlVK3qdHheGg1NtVVJt7pcr6B4nCwyOoLu3evyJOa8Rfhb/yX6EOgvD4PW5a671vr0KJN/tSvaIzPEB9qGN615y85i9qU8Zlg1pxrezpfUzywKV2D7Z9AXjvoSP4acUpWs0+V8/iNjCWSXKVpavZKtKMuHJtN1lq3puzWpN4b0fJ71fVWHI8XneIwlKclFaXLp923t050U3JNZfuppVySulb67HRwoy9o5uC15LaxPGcLKdpJK5J67Km30MlqwvejGS1i0467+T+KG4XD1JTW9cuZawpZVHdKm+WvXyNmBhVFLnru/wCfxlpwqeNi8nXmk2YMfh8STzSeZ90tPLodjIyZB2DHA4Xw2UXLVvM09eVHUhwkHTkmmua005Xry1NeUsCdGUUgs8eohBLyDDptx6gylFf1egOVF5CROLxWGud/B6fMy8dxMctwXtH9Dc8JC5cMhljNleV4jxJym4ZKSu6v6D8JKS78k97W319TvT8PjLdCl4RFO1arbt8DXZnrXOeG0017vLql1tdzo4fhkZ1KUI5l910vg01sacDgnF2m9d71UvNPc3wllVZNP+r/ACZm1uRxuL8MnJ3mvs+SM32bipprL3u9f0PTLFjzTXmn9Q1l7F7lHtx53gvD7f8A91W2/wCluKWrXvb7+XqdL7Lw6eV1enuyv4anRUEFkRnvWukcCXhLgm1KW9pKO/Zu9fQ5cITcqmppJ3Sg0nq9edvX0PaKCWwLjqanqC8HHlwTlBKMko1zjNPrroZcSE8N5ZtPNX3brKtrT229T0Msav6bXZ0cPxHM5uSjo9lvRrhbazymRjljTb0pLlbd0UE0vwMo6uQrRWZEyFezMNrzIrOi44QawiPyXnXRhwV8q8x8MIZCHRphacZ/YT5Ul07GnAwpK9NadfILULOzNahPsX5duZTjXUc5AuRICfYOMwZC443Jlg1qWIFZnzBqYYdMsr4FLEXVMKySkHoCmSyQqImV8SwQlImdA6EdEtGpoKLQtINIidFoNCEw0zOE9FSgnurFZglMsJqig0u4nMWpIMRxYuMi85IbigHgpl5gkSwn/ix6ENBB7UdY8pm6ITiSd9Easmgt4fU7yuVi8OXUapc0xUY+YxbBVFvG66oyy4ipp8h6w7FT4e9xmC632mrKOdLhwuFUlKrbQdT2bqJQDkRSMtLaFTwuYbkSxAIp+Qyd1o/p+gOlkzrqSEorfmGmLsJSJDRdlRaJYIV9yWVoS0RXZeYqys9ciQ0EmAphKRIeYvOBmKb7fIsJ0cQLMZ0/MOIYtPsJMQgkyxa0WSxKkXnDDpykHGZlzFqbLFrXnIZs5C6rXOoXTHQLlE2wQyqGUUyQFEqi7KbFF4jonB821zAxZaF8C/d57/Ifpn7aaBGrYCTMNgorKEU2IVlIU/Mi0ECohMz6F5iIohWLsl+ZIdl2BfmWCH8CLyB0JnXVfMkYgqEZ/wDsvQOuV+pYjHAtQYnK/wAT+aX5F2r1bv8Auf6Fi09X2LTQuKtaa/F6Bx2AmEBZFJEhEIvIYovyJBihiChAKSokVmIC5EHBrDFjSyDQXOLBZCAQtCpEIUVZ8WJfB4te6111IQ39MfbbKQDkQhhsLYLRCCEotEISXZLIQkpSV0EQhKImSyEJJm8vUmfy9SEECTtXTr/Er3Xz+pCFFRvDUdfyGKOu5CA0OMNdA1BlEM6RLDDjFIhAJkUHGNcrIQgZGXYDEZCGoGVyIQhpl//Z"
    },
    {
      title: 'Campera Nicolas',
      price: '4000',
      description: 'campera para el verano 90% fiselina y 10% algodon',
      counter: 0,
      stock: 5,
      image: "data:image/jpeg;base64,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"
     
    },
    {
      title: 'Campera Juan',
      price: '5000',
      description: 'campera para todo el ano 70% fiselina y 30% algodon',
      counter: 0,
      stock: 5,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQEBIVEBAVFQ8VFRUQFRUVFw8QFRUWFxUVFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADkQAAICAAQEAwUHBAICAwAAAAABAhEDEiExBEFRYQVxoRMigZGxFTJSwdHh8EJygvEUYpLSBiNT/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwUE/8QAIxEBAQEAAgEEAgMBAAAAAAAAAAERAhIUAxMhQTFRBFJhYv/aAAwDAQACEQMRAD8A5RCEPdeShCFpElJBpESGJEUihkUUkMijJXFDEiooZFA0uKGRRUYjYxDSuKGxiVGI2MTJSMRsYkjEbGJnWsVGI+ESoRHxiZtOKUQ1EJRDUTNrWBUQ1ENRDUTOnAKIyMQlENRM6VRiGohRiMUQ04BRDUQlENRM2nAKIaiMUQlEza1gYobFEUQ0jNpxTiJxMM1JFSiEqxy5YGpDc4FnTsz1fFiEouj1HnqQaRSQyKAokMSJFDIxApGIxRIojFENaxUUMwtW1zX51SKcdBXBx1vXdtdX2MWtSNkYjoxJFfqNjENOJGI2MSRiNjEzacVGI2MS4xHQiZtaxIRGxiFCAxRM2nAxiGohxiGomdaDGIxRCjENRM6cCohqISiMUTOnAKIaiGohqJm04GMQ1EJRDUTNrQVEJRDUQlENIVEJIJIJIzpCkXQVFpEiXEsblLLVj4XRaiGohKJ7GvNwKiHGIUYjIxDTioxGRiXGIyMQ1rFKIyMS4xDbSVvYzpxTVK9zDjYrzU1yu60XRjeK4xZbg72uuVvuZZRk1Kebb3Vm9X5JN/H5BaY28Nxjcn/VeWkuWmr26nXwqatO/I4kOEc0k3HfrWrX66adTt8BguMcrSSVVl59TFreHxiMjEKMBsYmbTioQHQgXCA6MTFpxUYjFEKMQ4xM2tYFRGRiEojIxM6cBGIxRCURiiZ04BRDUQ1ENRDTgFENRDUQlEzrWAUQ1EJRDUTOnApBJBJFpAlJFpBJF0WkKRaQVF0CDRA6ISfD1EJRDUQ1E9fXn4FRGRiXGIyMTOtYFRGxho3yW5Nh3BY33lt2215Bb8GQrD12JxPDqcdW1WujrXkVxTr7ryrXXv07EwJ2siTfV3vWoacYOI4Fr7jdNK1s21W3b8zNhYsGoOLlSdNPmuTaOvxrqMsRbqlvVJPozz7ikkk7dybf4tr26fmWrHf4GEG3JyTUFmdPkrv5UdfA4yDhn1rT5PSzhLwjEjFNTUk028rStdL0tUdHwbh5Sq17i53euvJ+e6MWxqSu1hK0m1XqOjEuEB0InG8nTFQgOjEuMRkYmexxUYhqIUYjFEzpwMYhqIcYhqIacCohqISiGomdOBUQ1EJRCSDTgVENItIJIzpxSRaQSRdFqUkWkWkWBSi6LISQhZCSEIWSfGfaOsr25diKVck/gSS7i4yp1uvp3PYx5+0+GJHmmvL9ys3R6FOuYLiuQZD2ol3Y2PZen5mOZMNu+vmV4qcmnFnekb+JMHDShmk6S+bfYGUrXp/OpfCxqk1UVSfdeRhr7cfipSebEeantaemrvTktte+pnhh+8kqbbSau8l61X+uR6fI7dJJJ6c9DBxXCqEnNJZajvWa9SRuEobyVKOTVUuetv8AY9PweJmqUZKWE063tNOn/NzyE+LzYaw1FK9Xeumj0XPmHHjMSKyRm4rXWOlrvzRz58d/DfHln5exjxuHbTkotScfeaVtb0nuboo8LwGO44ntE06Tk1Jau2tfPU73Df8AyFP78HF9qaOXP0+X18unHnxv5+HoooZFHNwPF8KW01t/Vp8NTfh4yatNPyZ83K2fmPo48N/B8UMihUZjIzOd9Rr2qakGkKUximHuH2qYkGkKUws5n3D7dNQSE5u5cZdy9wdDkEhSmF7Qe7PUwtC/aF+0HtBhhaF+0L9oXaLDCxXtC/aD2gwwgvOTOOxYYQXnIHaLHyLG4ZJXmpd1+gnh4SkrSrzNUVsnm15rSl/PoFHAy9/LT+eZ6/Z8HVnUGtH5/sLjO9tda/Ubh8O3iN66vav5Yx8DUlJOSa6tu/PXUtXVkxKSt7Ls/oHwjjNXtzSe7RWHHE9pJNSp0szS21vRbbLXuGsNQtRlSvben+RW6pMOik1SVLVtvklzAxNE2nrp8tlQuOPU1rolt18/Q04eHH2dtta6ve223z7hTGXHxtKrnu3y5/zsJxHa25eoGPhSlKqfn7uq00056AQburdbKtMvbrZpkXCYNRp8lX+XXy29RiwgoYlSy7VvpyY7HqK6PXfZVqEs/Bs+yVDSr53pzf8AGOw2lvr5v8wMScY/ea0Sb6Iz4/ERvLdOm0l/VXQfhn5OwU9Let3W/wAOpshxLj915X23ORg4tK1rrFaO+9v4WOliS0TWq95f9lW3RP4mfhqa7/CeM4q+9qtN/wBtjXi+NYq1jhqUbTbzvRbbZficONUntfJqmBDjadK5axXu7K938Dly9D07dx34/wAn1OMzXqcDx+EtJJxfRp/ToM+3cFf1JHl8biE5xw5PVu136IZ/xYNu9b1p8n1ON/iem7z+dz/UeoXj2F+NDF45hfjXqeQjwcXcY1ejrek261+DAxeGcFeat9W63+oeH6bXncv6x7L7dwvx/UtePYX4/RnzfE4/K5W81c60u6pdXdBYfHNzUlpHXMt66f7LwvT/AHWfO5f1j6QvHsL8Xowl47h/i9GeFljNVzu+i2V/sK/5kvwvXpy8w8LgfMv6j6B9uYfV/Iv7cw+vozwMOJm9oN6Xom9OvoR8bJbwfxtF4XAeZf1Hv143h9X8mX9tw6v5HgY+JLnF/CVfkXLxRfhdf3F4XH/V5n+R777bh3+RF43Dv6fqeDh4qvwN+b/RBz8U5PDyvyf5j4XFny/8j3X21DuX9tQ6v5Hg14l29f3Hx4rS8rf+UfpZeFw/1eX/AMx7X7ah1fyIeMWJP8L+cf8A2IXh8P2vKv8AWLpl0wyrPrfKrUq2FmLsiW2zJxOG7ulr6tdzc2CppuufQtFjmThGsy06rXfuOlhx9lc9U/6e62fqJ4yPvNcujD46T9lFQXvpVr0lKOZr4JjRCXKdZs2RJqk0veeySE4mPleRJtyUv/Pda8v3OdxePiRm3Je8mqvWk151zXTma+EwE4OSbzOLafRPV6vbzL8o/g8GV+0cvaK4pppKt2/9GmfDrE96+ctkrSunHy09CQxlDDi+8qjJK9FTuuV0D4VO5t79UuSbe18tWZJGLwTjcszb95vRarpp+hjxMO5qT1aTfvaOCb5d/wBz0+NgKUXF7PeuhyPE8sJdW7d1zei+SVebNS6zZjneF4O8mlu9rVUqd3ytM6Kbl7zdVaa/uem/Y52HN5motZU1a63b189/gdPhoprLN5c109OlU9dy04vD4bEmoy5K83n+m/MLD4TIs0Vh1yeq186eu51sGGVUm6XJ0HOKappNdGjPY9Y5OD4hqumt86f5BLxG8a2moVWq062FxvBf/nhxT5u2vkthGBweIpJ0l8TeSxnbHRhxEJfdf8+Jn8U4mMY1Vy78u4jjcBYaTSzOVqpVJX2VfyhODwGeCbeXW8u3u8g+D8ue8FNW43ajSvlfP4WM4fBy+a5dfh0H8Vg5Fo4vyeqAbilb1XL+7kODWriuIhW2V630V6aPzEYOGppNL71Zb+r9PmKliJp5vuatp7aLkFwnGK1ldNuoVu6W9/zcvpfbW/CHFJ3JzVWqVPe6+Zkl72jkk09G9aXf0N3EeJSSlGV86u7pvoc/Gcsko4ek910tcm+n6jJcFoo8LJ6Rae2W5Cf+Lirb3qtOt1X1HYPFWuVxyvTS+sa1p6MZ7X71NyeuvS7TtdP3IMqWLesXWl/68iOcrpJpVvvrfXbpoaMPDk9bTdvb+6/oPnG4Silq3m+OmnoWLXNhjN81VJq+d8vMPDx1dX1vlVK3qdHheGg1NtVVJt7pcr6B4nCwyOoLu3evyJOa8Rfhb/yX6EOgvD4PW5a671vr0KJN/tSvaIzPEB9qGN615y85i9qU8Zlg1pxrezpfUzywKV2D7Z9AXjvoSP4acUpWs0+V8/iNjCWSXKVpavZKtKMuHJtN1lq3puzWpN4b0fJ71fVWHI8XneIwlKclFaXLp923t050U3JNZfuppVySulb67HRwoy9o5uC15LaxPGcLKdpJK5J67Km30MlqwvejGS1i0467+T+KG4XD1JTW9cuZawpZVHdKm+WvXyNmBhVFLnru/wCfxlpwqeNi8nXmk2YMfh8STzSeZ90tPLodjIyZB2DHA4Xw2UXLVvM09eVHUhwkHTkmmua005Xry1NeUsCdGUUgs8eohBLyDDptx6gylFf1egOVF5CROLxWGud/B6fMy8dxMctwXtH9Dc8JC5cMhljNleV4jxJym4ZKSu6v6D8JKS78k97W319TvT8PjLdCl4RFO1arbt8DXZnrXOeG0017vLql1tdzo4fhkZ1KUI5l910vg01sacDgnF2m9d71UvNPc3wllVZNP+r/ACZm1uRxuL8MnJ3mvs+SM32bipprL3u9f0PTLFjzTXmn9Q1l7F7lHtx53gvD7f8A91W2/wCluKWrXvb7+XqdL7Lw6eV1enuyv4anRUEFkRnvWukcCXhLgm1KW9pKO/Zu9fQ5cITcqmppJ3Sg0nq9edvX0PaKCWwLjqanqC8HHlwTlBKMko1zjNPrroZcSE8N5ZtPNX3brKtrT229T0Msav6bXZ0cPxHM5uSjo9lvRrhbazymRjljTb0pLlbd0UE0vwMo6uQrRWZEyFezMNrzIrOi44QawiPyXnXRhwV8q8x8MIZCHRphacZ/YT5Ul07GnAwpK9NadfILULOzNahPsX5duZTjXUc5AuRICfYOMwZC443Jlg1qWIFZnzBqYYdMsr4FLEXVMKySkHoCmSyQqImV8SwQlImdA6EdEtGpoKLQtINIidFoNCEw0zOE9FSgnurFZglMsJqig0u4nMWpIMRxYuMi85IbigHgpl5gkSwn/ix6ENBB7UdY8pm6ITiSd9Easmgt4fU7yuVi8OXUapc0xUY+YxbBVFvG66oyy4ipp8h6w7FT4e9xmC632mrKOdLhwuFUlKrbQdT2bqJQDkRSMtLaFTwuYbkSxAIp+Qyd1o/p+gOlkzrqSEorfmGmLsJSJDRdlRaJYIV9yWVoS0RXZeYqys9ciQ0EmAphKRIeYvOBmKb7fIsJ0cQLMZ0/MOIYtPsJMQgkyxa0WSxKkXnDDpykHGZlzFqbLFrXnIZs5C6rXOoXTHQLlE2wQyqGUUyQFEqi7KbFF4jonB821zAxZaF8C/d57/Ifpn7aaBGrYCTMNgorKEU2IVlIU/Mi0ECohMz6F5iIohWLsl+ZIdl2BfmWCH8CLyB0JnXVfMkYgqEZ/wDsvQOuV+pYjHAtQYnK/wAT+aX5F2r1bv8Auf6Fi09X2LTQuKtaa/F6Bx2AmEBZFJEhEIvIYovyJBihiChAKSokVmIC5EHBrDFjSyDQXOLBZCAQtCpEIUVZ8WJfB4te6111IQ39MfbbKQDkQhhsLYLRCCEotEISXZLIQkpSV0EQhKImSyEJJm8vUmfy9SEECTtXTr/Er3Xz+pCFFRvDUdfyGKOu5CA0OMNdA1BlEM6RLDDjFIhAJkUHGNcrIQgZGXYDEZCGoGVyIQhpl//Z"

    }
  ]
  const[totalCounter, setTotalCounter] = useState(0)

  return (
    <div className="App">
      <Switch>
        <Route exact path ='/'>
          <NavBar totalCounter = {totalCounter}/>
          <Banner/>
          <ItemListContainer products = {products}/>
        </Route>
        <Route exact path ='/Products'>
          <NavBar totalCounter = {totalCounter}/>
          
          
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
