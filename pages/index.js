import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faReact, faLinkedin, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons'

let body = ["homepage", "ispreload"]
let col4 = ["col4", "col12medium"]
let i1 = ["icon", "featured"]
let i2 = ["icon", "featured", "alt"]
let i3 = ["icon", "featured", "alt2"]
let butt = ["button", "alt"]

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergio Valera</title>
        <meta charSet="utf-8" />
		    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <body className={body.join(" ")}>
		  <div id={utilStyles.pagewrapper}>

				<section id={utilStyles.header}>

						<h1>Portafolio personal</h1>

						<nav id={utilStyles.nav}>
							<ul>
								<li className={utilStyles.current} ><Link href='/pages/index.js'><a>Inicio</a></Link></li>
								<li><Link href="#intro"><a>Certificados</a></Link></li>
								<li><Link href='#projects'><a>Proyectos</a></Link></li>
							</ul>
						</nav>

						<section id={utilStyles.banner}>
							<header>
								<h2>Sergio Valera Trejo</h2>
								<p>Aspiring web developer</p>
								
							</header>
						</section>

						<section id={utilStyles.intro} className={utilStyles.container}>
							<header className={utilStyles.major + ' ' + "major"}>
								<h2>Mis certificados</h2>
							</header>
							<div className={utilStyles.row}>
								<div className={utilStyles.col4 + ' ' + utilStyles.col12medium}>
									<section className='first' id='intro'>
										<i className={utilStyles.icon + ' ' + utilStyles.solid + ' '  + utilStyles.featured + ' ' + i1.join(" ")}><FontAwesomeIcon icon={faHtml5} className={utilStyles.html5}/></i>
										<header>
											<h2>Responsive web design</h2>
										</header>
										<p>Fundamentos para la construcción de páginas web responsivas a diferentes tamaños de pantalla.</p>
									</section>
								</div>
								<div className={utilStyles.col4 + ' ' + utilStyles.col12medium}>
									<section className={utilStyles.middle + ' ' + "middle"}>
										<i className={utilStyles.solid + ' ' + utilStyles.icon + ' ' + utilStyles.featured + ' ' + utilStyles.alt + ' ' + i2.join(" ")}><FontAwesomeIcon icon={faReact} className={utilStyles.react} /></i>
										<header>
											<h2>Front end development libraries</h2>
										</header>
										<p>Manejo de Sass, Bootstrap, React y Redux.</p>
									</section>
								</div>
								<div className={utilStyles.col4 + ' ' + utilStyles.col12medium}>
									<section className='last'>
										<i className={utilStyles.solid + ' ' + utilStyles.icon + ' ' + utilStyles.featured + ' ' + utilStyles.alt2 + ' ' + i3.join(" ")}><FontAwesomeIcon icon={faJs} className={utilStyles.javascript} /></i>
										<header>
											<h2>JavaScript algorithms and data structures</h2>
										</header>
										<p>Fundamentos de Javascript, variables, arreglos, objetos, etc. Además Programación orientada a objetos y programación funcional.</p>
									</section>
								</div>
							</div>
						</section>

				</section>

				<section id={utilStyles.main + ' ' + "main"}>
					<div className={utilStyles.container}>
						<div className={utilStyles.row}>
							<div className={utilStyles.col12}>

									<section id="projects">
										<header className={utilStyles.major + ' ' + "major"}>
											<h2>Mis proyectos</h2>
										</header>
										<div className={utilStyles.row}>
											<div className={utilStyles.col4 + ' ' + utilStyles.col6medium + ' ' + utilStyles.col12small}>
												<section className={utilStyles.box + ' ' + "box"}>
													<a href="https://zoltan199.github.io/Palindrome/palindrome.html" className={utilStyles.image + ' ' + utilStyles.featured}><img className='img1' src="images/word-of-mouth.png" alt=""/></a>
													<header>
														<h3>Palindrome checker</h3>
													</header>
													<p>Comprueba si la palabra que ingresaste es un palindromo.</p>
													<footer>
														<ul className={utilStyles.actions + ' ' + "actions"}>
															<li><a href="https://zoltan199.github.io/Palindrome/palindrome.html" className={utilStyles.button + ' ' + utilStyles.alt + ' ' + butt.join(" ")}>Pruébalo</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className={utilStyles.col4 + ' ' + utilStyles.col6medium + ' ' + utilStyles.col12small}>
												<section className={utilStyles.box + ' ' + "box"}>
													<a href="https://zoltan199.github.io/Roman-numbers/romans.html" className={utilStyles.image + ' ' + utilStyles.featured}><img className='img1' src="images/number-blocks.png" alt="" /></a>
													<header>
														<h3>Roman numeral converter</h3>
													</header>
													<p>Ingresa un número y conviertelo a formato romano.</p>
													<footer>
														<ul className={utilStyles.actions + ' ' + "actions"}>
															<li><a href="https://zoltan199.github.io/Roman-numbers/romans.html" className={utilStyles.button + ' ' + utilStyles.alt + ' ' + butt.join(" ")}>Pruébalo</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className={utilStyles.col4 + ' ' + utilStyles.col6medium + ' ' + utilStyles.col12small}>
												<section className={utilStyles.box + ' ' + "box"}>
													<a href="https://zoltan199.github.io/Caesars-cipher/cipher.html" className={utilStyles.image + ' ' + utilStyles.featured}><img className='img1' src="images/caesar-cipher.png" alt="" /></a>
													<header>
														<h3>Ceasers cipher</h3>
													</header>
													<p>Descifra una palabra encriptada en código César.</p>
													<footer>
														<ul className={utilStyles.actions + ' ' + "actions"}>
															<li><a href="https://zoltan199.github.io/Caesars-cipher/cipher.html" className={utilStyles.button + ' ' + utilStyles.alt + ' ' + butt.join(" ")}>Pruébalo</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className={utilStyles.col4 + ' ' + utilStyles.col6medium + ' ' + utilStyles.col12small}>
												<section className={utilStyles.box + ' ' + "box"}>
													<a href="https://zoltan199.github.io/Telophone-validator/telephone.html" className={utilStyles.image + ' ' + utilStyles.featured}><img className='img1' src="images/telephone.png" alt="" /></a>
													<header>
														<h3>Telephone number validator</h3>
													</header>
													<p>Comprueba si el formato del número telefónico que ingreses es el correcto.</p>
													<footer>
														<ul className={utilStyles.actions + ' ' + "actions"}>
															<li><a href="https://zoltan199.github.io/Telophone-validator/telephone.html" className={utilStyles.button + ' ' + utilStyles.alt + ' ' + butt.join(" ")}>Pruébalo</a></li>
														</ul>
													</footer>
												</section>
											</div>
											<div className={utilStyles.col4 + ' ' + utilStyles.col6medium + ' ' + utilStyles.col12small}>
												<section className={utilStyles.box + ' ' + "box"}>
													<a href="https://zoltan199.github.io/Cash-register/cid.html" className={utilStyles.image + ' ' + utilStyles.featured}><img className='img1' src="images/cash-register.png" alt="" /></a>
													<header>
														<h3>Cash register</h3>
													</header>
													<p>Este simulador de caja registrado devuelve el cambio de tu compra.</p>
													<footer>
														<ul className={utilStyles.actions + ' ' + "actions"}>
															<li><a href="https://zoltan199.github.io/Cash-register/cid.html" className={utilStyles.button + ' ' + utilStyles.alt + ' ' + butt.join(" ")}>Pruébalo</a></li>
														</ul>
													</footer>
												</section>
											</div>
										</div>
									</section>

							</div>
						</div>
					</div>
				</section>

				<section id="footer">
					<div className={utilStyles.container} >
						<div className={utilStyles.row}>

							<div className={utilStyles.col4 + ' ' + utilStyles.col12medium} id="social" >
								<section id={utilStyles.social}>
									<header>
										<h2>Contáctame</h2>
									</header>
									<ul className='social'>
										<li><FontAwesomeIcon icon={faLinkedin} className={utilStyles.linkedin} ><span className={utilStyles.label}>LinkedIn</span></FontAwesomeIcon></li>
										<li><FontAwesomeIcon icon={faGithub} className={utilStyles.github} ><span className={utilStyles.label}>GitHub</span></FontAwesomeIcon></li>
										<li><Link href='#'><FontAwesomeIcon icon={faGoogle} className={utilStyles.gmail} ><span className={utilStyles.label}>LinkedIn</span></FontAwesomeIcon></Link></li>
									</ul>
								</section>
							</div>
							<div className={utilStyles.col12}>
									<div id={utilStyles.copyright}>
										<ul className={utilStyles.links + ' ' + "links"}>
											<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="/pages/index.js">Segio Valera</a></li>
										</ul>
									</div>

							</div>
						</div>
					</div>
				</section>

		</div>

	</body>
    </>
  )
}
