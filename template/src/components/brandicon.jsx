import view3 from "../components/asset/img_3.jpg.webp"
import view4 from "../components/asset/img_4.jpg.webp";
function Brandicon() {
    return(
        <div class="graphweb">
            <div>
                <div>
                    <img src={view3} alt="view" class="view"/>
                </div>
                <div>
                    <h3>
                        <a href="https://preview.colorlib.com/theme/pageone/#" class="graphic">Branding</a>
                    </h3>
                    <p class="explain">
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={view4} alt="view1" class="view"/>
                </div>
                <div class="explain-1">
                    <h3>
                        <a href="https://preview.colorlib.com/theme/pageone/#" class="graphic">Iconography</a>
                    </h3>
                    <p class="explain">
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Brandicon;