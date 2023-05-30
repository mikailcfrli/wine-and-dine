import './ProductDetailsPage';
import wine from '../ProductDetailsPage/wine.png';
import leaf from '../ProductDetailsPage/list.png';
import flag from '../ProductDetailsPage/flag.png';
export const ProductDetailsPage = () => {
  return (
    <div className='container' >
      <div className="product-details">
        <div className="product-image">
          <div className="grid-container">
            <div>
              <img className="Wine" src={wine} alt=''></img>
            </div>
          </div>
        </div>
        <div className="product-decription-container">
          <div className="product-title">
            <div className="right-r">
              <p className='pright1' >CHATEAU</p> <p className='haut'>HAUT-BRION</p>
              <hr className='hr1'></hr>
              <p className='pright2' >2009/0.75 л</p>
              <div className="card-right2">
                <img className='flag' src={flag} alt='' ></img>
                <p className='pright3'>FRANCE/HAUT-BRION</p>
              </div>
            </div>
            <div className="card-right3">
              <p className='p-right4'>PRICE FOR 1 PC</p>
              <p className='p-right5'>90 000 р</p>
              <button className='button-cart' >ADD TO CART</button>
            </div>
          </div>
          <div className="Description">
            <div className="card-right-end1">
              <div className="text-classification">


                <p className='p-right-end1' >GEOGRAPHY:</p>
                <p className='p-right-end2' >France - Bordeaux - Pessac-Leognan</p></div>
              <div className="text-classification">


                <p className='p-right-end1' >FORTRESS:</p>
                <p className='p-right-end2' >14,5%</p>
              </div>
              <div className="text-classification">
                <p className='p-right-end1' >IMPORTER:</p>
                <p className='p-right-end2' >SIMPLE WINE</p>   </div>
            </div>
            <div className="card-right-end2">
              <div className="text-classification">
                <p className='p-right-end11' >CLASSIFICATION:</p>
                <p className='p-right-end22' >1-ER GCC</p></div>
              <div className="text-classification">


                <p className='p-right-end11' >SUGAR</p>
                <p className='p-right-end22' >0.1 g/l</p></div>
              <div className="text-classification">
                <p className='p-right-end11' >RATING:</p>
                <p className='p-right-end22' >RP 95</p></div>
            </div>
            <div className="card-right-end3">
              <div className="text-classification">
                <p className='p-right-end111' >VARIETY COMPOSITION:</p>
                <p className='p-right-end222' >Cabernet Franc Cabernet Sauvin. Merlot Petit Verdot</p></div>
              <div className="images-leaf">
                <img className='leaf' src={leaf} alt='' ></img>
                <img className='leaf' src={leaf} alt='' ></img>
                <img className='leaf' src={leaf} alt='' ></img>
              </div>
            </div>

          </div>
          <div className="card-info">
            <p className='paragraph-title' >
              COLOR,TASTE,AROMA:
            </p>
            <p className='paragraph-box' >
              Chateau Haut-Brion - refers to the great wines of our time. Produced since 1533, it can, to some extent, be considered the "father of all Premier Cru Classes". This is the oldest Grand Cru of Bordeaux, the creator of a new style of wine in the 17th century.
              The highlight of Haut-Brion is its extreme generosity and concentration, such aromatic persistence is inherent only in the most noble wines. The bouquet is restrained, unhurriedly and gracefully unfolds with tones of berries - blackberries, plums, mulberries and currants, giving way to mineral, woody, spicy and smoked notes. The palate is just as wonderfully multi-layered, majestic, rich in tannins, but full of grace and refinement. Starting from the middle of the tasting, the power of the wine is fully revealed, culminating in an exceptionally long aftertaste. Before us is a true masterpiece, Wine Advocate rated the wine at 100 points. It is recommended to drink in the period 2020-2054.
            </p>
            <hr className='hr'></hr>
            <div className='legend-part' >
              <p className='paragraph-title' >LEGEND:</p>

              <p className='paragraph-box' >The Chateau vineyard is located in the commune of Pessac-Leognan, and is part of the appellation of the same name, located in the north of the Graves wine region in Bordeaux. The terroir, formed by two large gravel ridges of the Günz period (Günz is the name given to the ice age of the first Quaternary period), protrudes 12-15 meters above the bottom of neighboring reservoirs. Gravel is a small pebble formed by various varieties of quartz:for Château Haut-Brion, this pebble is a real gem. Two rivulets, the Pegyu in the north and the Serpan in the south, limit this vast gravel terrace called Haut-Brion, which has been mentioned on ancient maps of the region and in notarial deeds since the beginning of the 15th century. The subsoil of the terroir is loam.The vineyard area is 51 hectares. 48 of them are planted with red grape varieties (Merlot, Cabernet Sauvignon, Cabernet Franc and Petit Verdot) and about 3 with white grape varieties (Sémillon and Sauvignon Blanc).
                The Château Haut-Brion estate was founded by
                Jean de Pontac and has been producing wine since 1533, making it the oldest estate in the Bordeaux region. Red wine Château Haut-Brion embodies the five-century tradition of winemaking and is an integral part of the world history of wine. In 1660, Haut Brion wine, under its present name, was served at the table of King Charles II of England, making Haut Brion the oldest luxury brand in the world.Thanks to the use, back in those distant times, of new methods of production and aging, this wine became the great predecessor of all current red wines intended for long storage.
                In 1855, Haute Brion was elevated to the rank of Premier Cru in the Gironde red wine class. Only three other Bordeaux wines were awarded the same highest quality rating in a classification that is still relevant today.</p>

              <hr className='hr'></hr>
            </div>
            <div className="vinification-part">
              <p className='paragraph-title' >
                VINIFICATION:</p>
              <p className='paragraph-box' >The grapes go to the winery, where, after sorting, fermentation and pressing, the juice obtained by gravity is separated from the pulp, which is also pressed to obtain a "van de press". The wine is allowed to rest, followed by malolactic fermentation and assemblage by determining the best possible combination of different varieties. Exposure takes place in oak barrels for 18-22 months, 80% of which are new, with periodic removal from the sediment. After aging in barrels, the wine is poured into vats before bottling.</p>

            </div>

          </div>



        </div>
      </div>
    </div>
  );
};
