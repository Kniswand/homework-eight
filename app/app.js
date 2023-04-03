var homeContent = `<div class="homeContent">
<h1>Home</h1>
<img src="images/water.jpg" alt="Water">
<p>Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance, and it is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent). It is vital for all known forms of life, despite not providing food, energy or organic micronutrients. Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. "Water" is also the name of the liquid state of H2O at standard temperature and pressure.
</p><p>
Because Earth's environment is relatively close to water's triple point, water exists on earth as a solid, liquid, and gas. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds consist of suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor.</p><p>
Water covers about 71% of the Earth's surface, with seas and oceans making up most of the water volume on earth (about 96.5%). Small portions of water occur as groundwater (1.7%), in the glaciers and the ice caps of Antarctica and Greenland (1.7%), and in the air as vapor, clouds (consisting of ice and liquid water suspended in air), and precipitation (0.001%). Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.
</p><p>
<img src="images/dropplets.jpg" alt="Dropplets">
Water plays an important role in the world economy. Approximately 70% of the freshwater used by humans goes to agriculture. Fishing in salt and fresh water bodies has been, and continues to be, a major source of food for many parts of the world, providing 6.5% of global protein. Much of the long-distance trade of commodities (such as oil, natural gas, and manufactured products) is transported by boats through seas, rivers, lakes, and canals. Large quantities of water, ice, and steam are used for cooling and heating, in industry and homes. Water is an excellent solvent for a wide variety of substances both mineral and organic; as such it is widely used in industrial processes, and in cooking and washing. Water, ice and snow are also central to many sports and other forms of entertainment, such as swimming, pleasure boating, boat racing, surfing, sport fishing, diving, ice skating and skiing.</p>
</div>`

var aboutContent = `<div class="aboutContent">
<h1>About</h1>
<p>
Water (H2O) is a polar inorganic compound. At room temperature it is a tasteless and odorless liquid, nearly colorless with a hint of blue. This simplest hydrogen chalcogenide is by far the most studied chemical compound and is described as the "universal solvent" for its ability to dissolve many substances. This allows it to be the "solvent of life": indeed, water as found in nature almost always includes various dissolved substances, and special steps are required to obtain chemically pure water. Water is the only common substance to exist as a solid, liquid, and gas in normal terrestrial conditions.</p>
<h2>States</h2>
<img src="images/ice.jpg" alt="Ice">
<p>Along with oxidane, water is one of the two official names for the chemical compound H2O; it is also the liquid phase of H2O. The other two common states of matter of water are the solid phase, ice, and the gaseous phase, water vapor or steam. The addition or removal of heat can cause phase transitions: freezing (water to ice), melting (ice to water), vaporization (water to vapor), condensation (vapor to water), sublimation (ice to vapor) and deposition (vapor to ice).</p>
<h2>Density</h2>
<p>Water differs from most liquids in that it becomes less dense as it freezes. In 1 atm pressure, it reaches its maximum density of 999.972 kg/m3 (62.4262 lb/cu ft) at 3.98 °C (39.16 °F), or almost 1,000 kg/m3 (62.43 lb/cu ft) at almost 4 °C (39 °F). The density of ice is 917 kg/m3 (57.25 lb/cu ft), an expansion of 9%. This expansion can exert enormous pressure, bursting pipes and cracking rocks.
</p><p>
In a lake or ocean, water at 4 °C (39 °F) sinks to the bottom, and ice forms on the surface, floating on the liquid water. This ice insulates the water below, preventing it from freezing solid. Without this protection, most aquatic organisms residing in lakes would perish during the winter.</p>
</div>`

var productsContent = `<div class="aboutContent">
<h1>Products</h1>
<img src="images/bottles.jpg" alt="Bottles">
<p>Bottled water is drinking water (e.g., well water, distilled water, mineral water, or spring water) packaged in plastic or glass water bottles. Bottled water may be carbonated or not. Sizes range from small single serving bottles to large carboys for water coolers.
</p><br>
<h2>Types</h2>
<ul>
<li>Plastic Water Bottles</li>
<li>Stainless Steel Water Bottles</li>
<li>Glass Bottles</li>
<li>Insulated Water Bottles</li>
<li>Collapsible Water Bottles</li>
</ul><br><br>
<span>Buy now!</span>
</div>`

var contactContent = `<div class="aboutContent">
<img src="images/waterfall.jpg" alt="waterfall" style="height:550px">
<h1>Contact</h1>
<p>Do you have feedback or other concerns for us? Fill out the form below.</p>
<div class="form">
<input type="text" placeholder="Name..."><br><br>
<input type="text" placeholder="E-mail..."><br><br>
<input type="text" placeholder="Comment..." style="width: 35%">
</div><br>
<span>Send message</span><br>
<h2>Donate</h2>
<div class="form">
<input type="number" placeholder="Amount..."><br>
</form>
<span>Send donation</span>
</div>`

function initListerners() {

    $("nav a").on("click", function (e) {
        let btnID = e.currentTarget.id;
        let pageContentId = btnID + "Content";
        changePageContent(pageContentId);
    });
}

function changePageContent(pageContentIdVarName){
    $("#app").html(eval(pageContentIdVarName));
}

$(document).ready(function () {
    changePageContent('homeContent');
    initListerners();
});
