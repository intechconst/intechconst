<script>
    import Container from "$lib/Container.svelte";

</script>
<Container>
    <div class="content">
        <h2>О нас</h2>
        <p>
            ООО "Промтехстрой" выполнит полный комплекс работ по реконструкции
            и строительству промышленных объектов, в том числе:
        </p>
        <ul>
            <li>Внешние сети электроснабжения 0,4 кВ, 10 кВ (воздушном, кабельном исполнении)</li>
            <li>Трансформаторные подстанции</li>
            <li>Внутриплощадочные сети электроснабжения</li>
            <li>Кабельные трассы</li>
            <li>Освещение территорий, внутриплощадочное освещение</li>
            <li>Внутридомовые сети электроснабжения</li>
            <li>Заземление</li>
            <li>Молниезащита</li>
        </ul>
        <a download href="/intechconst-offer.docx">Коммерческое Предложение</a>
        <section>
            <h3>Опыт работы</h3>
            <section>
                <h4>АО "Антипинский НПЗ" — 2, 3 очередь строительства</h4>
                <ul>
                    <li>Освещение</li>
                    <li>Обогрев</li>
                    <li>Сети автоматизации</li>
                    <li>Молниезащита</li>
                    <li>Заземление</li>
                    <li>Внутриплощадочные сети</li>
                    <li>Внешние электроснабжение УГП</li>
                </ul>
            </section>
            <section>
                <h4>Администрация Тюменского муниципального района</h4>
                <ul>
                    <li>ВЛ-10, 0.4 кВт</li>
                    <li>КТП</li>
                    <li>Освещение населенных пунктов</li>
                </ul>
            </section>
            <section>
                <h4>Нефтебаза г. Ишим</h4>
                <ul>
                    <li>Внешние сети</li>
                    <li>Внутриплощадочные сети</li>
                    <li>Сети автоматизации</li>
                </ul>
            </section>
            <section>
                <h4>ООО "Полимер" г. Тобольск</h4>
                <ul>
                    <li>Освещение</li>
                    <li>Обогрев</li>
                    <li>Сети автоматизации</li>
                    <li>Молниезащита</li>
                    <li>Заземление</li>
                    <li>Внутриплощадочные сети</li>
                </ul>
            </section>
            <section>
                <h4>ОАО "Фортум"</h4>
                <ul>
                    <li>Челябинская ТЭЦ2</li>
                    <li>Тобольская ТЭЦ</li>
                </ul>
            </section>
            <section>
                <h4>ООО "АНПЗ – Продукт"</h4>
                <ul>
                    <li>Внешние сети электроснабжения</li>
                    <li>Освещение АЗС</li>
                    <li>
                        Электромонтажные работы МАЗС
                        <ul>
                            <li>с. Исетское</li>
                            <li>с. Арамашево</li>
                            <li>с. Малышинка</li>
                            <li>д. Кутарбитка</li>
                            <li>р. П. Голышманово</li>
                            <li>г. Курган</li>
                        </ul>
                    </li>
                    <li>Электромонтажные работы по модернизации АЗС (установка СУГ)</li>
                </ul>
            </section>
            <section>
                <h4>6 км. Старого Тобольского тракта</h4>
                <ul>
                    <li>д. Патрушева</li>
                    <li>с. Арамашево</li>
                    <li>д. Пиганово</li>
                    <li>д. Кутарбитка</li>
                    <li>с. Ярково</li>
                </ul>
            </section>
            <section>
                <h4>ООО "Талицкие Молочные Фермы"</h4>
                <ul>
                    <li>Реконструкция завода</li>
                    <li>Прокладка внешних сетей электроснабжения</li>
                </ul>
            </section>
            <section>
                <h4>Ямал СПГ — 1, 2 очередь строительства</h4>
                <ul>
                    <li>Электромонтажные и пусконаладочные работы</li>
                </ul>
            </section>
        </section>
    </div>
</Container>
<style lang="scss">
    @import "../../sizes.scss";

    .content {
        padding-top: $header-height + $spacing;
        padding-bottom: $spacing;

        @media (orientation: portrait) {
            padding-top: $header-height + $spacing-portrait;
            padding-bottom: $spacing-portrait;
        }
    }

    ul {
        list-style-type: square;

        ul {
            font-size: 0.9em;
        }
    }

    p, ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    section {
        margin-top: 2rem;


        section {
            margin-top: 1rem;
        }
    }
</style>
