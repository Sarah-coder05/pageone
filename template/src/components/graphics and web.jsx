import view from "../components/asset/img_1.jpg.webp"
import view1 from "../components/asset/img_2.jpg.webp"
function Graphics() {
    return(
        <div class="graphweb">
            <div>
                <div>
                    <img src={view} alt="view" class="view"/>
                </div>
                <div>
                    <h3>
                        <a href="https://preview.colorlib.com/theme/pageone/#" class="graphic">Graphic design</a>
                    </h3>
                    <p class="explain">
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a 
                    large language ocean. Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={view1} alt="view1" class="view"/>
                </div>
                <div>
                    <h3>
                        <a href="https://preview.colorlib.com/theme/pageone/#" class="graphic">Web development</a>
                    </h3>
                    <p class="explain">
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a 
                    large language ocean. Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Graphics;