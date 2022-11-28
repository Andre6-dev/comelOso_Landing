import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Realmente funciona optimamente',
    body: 'Descargue ComelOso hoy y descubri el emprendimiento y su camino que quiere lograr.',
    author: 'Gabriel Cordova Begazo',
    rating: 5,
  },
  {
    title: 'Optima con un buen logo.',
    body: 'Me gustaria que hayan mas etiquetas sin embargo es una buena aplicacion.',
    author: 'Jose Mamani Choquehuanca',
    rating: 5,
  },
  {
    title: 'Ahora Mismo.',
    body: 'Es un sitio genial para saber a donde ir a comer si no tengo presente donde estoy , ademas de su interfaz intuitiva.',
    author: 'Andre Gallegos Quenaya',
    rating: 5,
  },
  {
    title: 'Crea un aire moderno.',
    body: 'Realmente atrapa al cliente con su diseño e interfaz ,destacando su facil uso y buen diseño como marca emprendedora.',
    author: 'Klebert Layme Arapa',
    rating: 5,
  },
  {
    title: 'Lo Amo!',
    body: 'La innovacion con su marca como emprendimiento , su diseño y funcionamiento intuitivo es recomendable para cualquier app,incluso recomendaria ello a otros aplicativos similares.',
    author: 'Nikoll Bonilla Hancco',
    rating: 4,
  },
  {
    title: 'Demasiado buena para ser verdad.',
    body: 'Esta aplicacion es una locura!',
    author: 'Dayana Cruz Atamari',
    rating: 5,
  },
  {
    title: 'Ojalá pudiera dar 6 estrellas',
    body: 'Esta es, literalmente, la aplicación más importante que descargará en su vida. Ponte en esto antes de que sea tan popular que todos los demás también reciban estos consejos.',
    author: 'Miguel Soto Tapia',
    rating: 4,
  },
  {
    title: 'Consigue ComelOso.',
    body: 'Si,leiste esto bien .¿Quieres tu propia app de restaurante?',
    author: 'Edison Gutierrez Laura',
    rating: 5,
  },
  {
    title: 'No mas dudas!',
    body: 'Despues de 2 semanas de uso ,quede maravillado .Que esperas para descargar ComelOso?',
    author: 'Adriana Bobadilla Hancco',
    rating: 5,
  },
  {
    title: 'Puedes Descargar esta App',
    body: '¡A menos que quieras tener la mejor vida de tu vida! Literalmente estoy escribiendo esto desde un yate.',
    author: 'Mijale Babilonia Galindo',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
      ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Opiniones o Comentarios de Nuestros Clientes.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Referidos comentados en los ultimos 30 dias.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}