<template>
	<div>
		<div class="card p-3">
			<h1>Hello I am Andre Villalon</h1>
		</div>
		<div class="card my-3 p-3">
			<h3>Programming Finals API</h3>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							News API
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							It provides a curated selection of small news articles, covering a
							wide range of topics, including politics, technology, sports,
							entertainment, and more. We aim to provide our readers with a
							comprehensive and unbiased look at the day's events, with each
							article presented in a concise and easy-to-read format.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Cat API
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							A comprehensive library that provides developers with easy access
							to detailed information about different cat breeds. Our library
							offers a vast collection of data points, including breed, weight,
							lifespan, and other essential information that can be used to
							build a variety of cat-related applications.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#countryAccr"
							aria-expanded="false"
							aria-controls="countryAccr"
						>
							Country API
						</button>
					</h2>
					<div
						id="countryAccr"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Comprehensive API that provides developers with reliable data and
							information about countries worldwide. With our app, you can
							easily obtain essential information such as a country's name,
							capital, population, currency, and language. Our API provides data
							sourced from trusted organizations such as national statistical
							agencies and international organizations like the United Nations.
							We also offer advanced features like geolocation, weather
							information, and maps, making it perfect for applications that
							require location-based data.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="quoteEl">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#quoteThree"
							aria-expanded="false"
							aria-controls="quoteThree"
						>
							Quote API
						</button>
					</h2>
					<div
						id="quoteThree"
						class="accordion-collapse collapse"
						aria-labelledby="quoteEl"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Quote generating tools allow users to generate inspiring,
							thought-provoking, or humorous quotes at the click of a button.
							These tools usually rely on a database of quotes and use
							algorithms to randomly select and display a quote. Some quote
							generators also allow users to specify a topic or author to narrow
							down the selection of quotes. Quote generating tools are popular
							among writers, speakers, and anyone looking for a quick dose of
							inspiration or motivation. They can be used for personal
							reflection, social media posts, presentations, or any other
							creative project that requires a catchy quote.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="tedEl">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#tedElAcc"
							aria-expanded="false"
							aria-controls="tedElAcc"
						>
							Ted Talk API
						</button>
					</h2>
					<div
						id="tedElAcc"
						class="accordion-collapse collapse"
						aria-labelledby="tedEl"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							A TED Talk is a presentation style that originated from the annual
							TED (Technology, Entertainment, Design) conferences. It features
							speakers who deliver short, powerful talks on a wide range of
							topics, including science, technology, art, education, and
							culture. TED Talks are known for their inspiring and
							thought-provoking nature, as well as their ability to bring
							complex ideas to a wide audience in an engaging and accessible
							way. Each talk is typically limited to 18 minutes or less, and is
							accompanied by visual aids and multimedia elements to enhance the
							speaker's message. TED Talks are widely available online and have
							become a popular platform for sharing ideas and sparking
							conversations around the world.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="numEl">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#numAcc"
							aria-expanded="false"
							aria-controls="numAcc"
						>
							Numbers API
						</button>
					</h2>
					<div
						id="numAcc"
						class="accordion-collapse collapse"
						aria-labelledby="numEl"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<p>
								An API for interesting facts about numbers. Provides trivia,
								math, date, and year facts about numbers.
							</p>
							<p>
								For example, “5 is the number of platonic solids”, “42 is the
								number of little squares forming the left side trail of
								Microsoft’s Windows 98 logo”, “February 27th is the day in 1964
								that the government of Italy asks for help to keep the Leaning
								Tower of Pisa from toppling over”
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>
