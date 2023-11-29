declare namespace Websoft {

  class WebsoftBaseClass {
    /**
     * Используется для получения последней произошедшей ошибки.
     * @returns Текст последней произошедшей ошибки.
     */
    GetError(): string;

    /**
     * Используется для получения версии компонента.
     * @returns Версия компонента.
     */
    GetVersion(): string;
  }

  namespace Office {
    /**
     * Библиотека для работы с документами Microsoft Office Excel.
     */
    namespace Excel {

      /**
       * Описание границы ячейки.
       */
      class Border extends WebsoftBaseClass {
        /**
         * Цвет границы.
         */
        Color: string;

        /**
         * Стиль границы.
         */
        LineStyle: "None"
        | "DashDot"
        | "DashDotDot"
        | "Dashed"
        | "Dotted"
        | "Double"
        | "Hair"
        | "Medium"
        | "MediumDashDot"
        | "MediumDashDotDot"
        | "MediumDashed"
        | "SlantedDashDot"
        | "Thick"
        | "Thin";
      }

      /**
       * Класс для работы с границами ячейки.
       */
      class Borders extends WebsoftBaseClass {
        /**
         * Получает описание границы указанного типа.
         * @param string - BorderType.
         */
        GetBorder(
          borderType: "LeftBorder"
          | "RightBorder"
          | "TopBorder"
          | "BottomBorder"
          | "DiagonalDown"
          | "DiagonalUp"
          | "Vertical"
          | "Horizontal"
        ): Border;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetColor(color: string): void;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetStyle(
          borderType: "None"
          | "DashDot"
          | "DashDotDot"
          | "Dashed"
          | "Dotted"
          | "Double"
          | "Hair"
          | "Medium"
          | "MediumDashDot"
          | "MediumDashDotDot"
          | "MediumDashed"
          | "SlantedDashDot"
          | "Thick"
          | "Thin"
        ): void;
      }

      class Cell extends WebsoftBaseClass {
        /**
         * Формула.
         */
        Formula: string;
        /**
         * Значение в формате HTML.
         */
        HtmlString: string;
        /**
         * Является ли ячейка объединенной с другими.
         */
        readonly IsMerged: boolean;
        /**
         * Количество картинок в ячейке.
         */
        readonly PicturesCount: number;
        /**
         * Стиль ячейки.
         */
        readonly Style: Style;
        /**
         * Значение ячейки.
         */
        Value: string | number | boolean | null;

        /**
         * Получить картинку.
         * @param System.Int32 - Порядковый номер изображения.
         * @returns Изображение.
         */
        GetPicture(index: number): Drawing.Picture;
      }

      class Cells extends WebsoftBaseClass {
        /**
         * Колонки.
         */
        Columns: Columns;
        /**
         * Настройка потребления памяти. Принимает значения "MemoryPreference" или "Normal".
         * Значение "MemoryPreference" применяется при записи в документ большого количества данных.
         */
        MemorySetting: "MemoryPreference" | "Normal";
        /**
         * Строки.
         */
        Rows: Rows;

        /**
         * Выбирает диапазон ячеек для массового управления.
         * @param rangeCells - Диапазон ячеек в формате "A1:B9".
         */
        CreateRange(rangeCells: string): Range;

        /**
         * Получает ячейку по указанному расположению.
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;

        /**
         * Скрывает колонку.
         * @param number - Номер колонки.
         */
        HideColumn(number: number): void;

        /**
         * Скрывает строку.
         * @param number - Номер строки.
         */
        HideRow(number: number): void;

        /**
         * Объединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        // eslint-disable-next-line no-magic-numbers
        Merge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;

        /**
         * Устанавливает ширину колонки.
         * @param columnNum - Номер колонки.
         * @param width - Ширина (Double).
         */
        // eslint-disable-next-line no-magic-numbers
        SetColumnWidth(columnNum: number, width: number): 1 | 0;

        /**
         * Устанавливает ширину строки.
         * @param rowNum - Номер строки.
         * @param width - Ширина (Double).
         */
        // eslint-disable-next-line no-magic-numbers
        SetRowHeight(rowNum: number, width: number): 1 | 0;

        /**
         * Разъединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        // eslint-disable-next-line no-magic-numbers
        UnMerge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;
      }

      class Column extends WebsoftBaseClass {
        /**
         * Ширина колонки.
         */
        Width: number;
      }

      class Columns extends WebsoftBaseClass {
        /**
         * Получает {@link Columns | колонку} по указанному номеру.
         * @param index - Номер колонки.
         *
         */
        GetColumn(index: number): Column;
      }

      /**
       * Класс для работы с документом Microsoft Excel.
       */
      class Document extends WebsoftBaseClass {
        /**
         * Количество страниц.
         */
        readonly WorkSheetsCount: number;

        /**
         * Создает новый лист.
         */
        AddWorksheet(): Worksheet;

        /**
         * Закрывает документ.
         */
        // eslint-disable-next-line no-magic-numbers
        Close(): 0 | 1;

        /**
         * Создает книгу Excel.
         */
        // eslint-disable-next-line no-magic-numbers
        CreateWorkBook(): 0 | 1;

        /**
         * Получает значение листа по номеру.
         * @param index - Порядковый номер листа.
         */
        GetWorksheet(index: number): Worksheet;

        /**
         * Загружает данные в формате HTML из указанного файла.
         * @param filePath - Путь до файла в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         *
         */
        // eslint-disable-next-line no-magic-numbers
        LoadHtmlFile(filePath: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Загружает данные в формате HTML из строки.
         * @param htmlText - Переменная, содержащаю строку в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         *
         */
        // eslint-disable-next-line no-magic-numbers
        LoadHtmlString(htmlText: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Открывает файл Microsoft Excel.
         * @param filePath - Путь до файла.
         */
        // eslint-disable-next-line no-magic-numbers
        Open(filePath: string): 1 | 0;

        /**
         * Сохраняет текущий документ.
         */
        // eslint-disable-next-line no-magic-numbers
        Save(): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: CSV, ODS, TIFF, SVG, PDF, MHTML, HTML.
         * @param newPath - Путь сохранения, включая имя файла.
         */
        // eslint-disable-next-line no-magic-numbers
        SaveAs(newPath: string): 1 | 0;
      }

      class Font extends WebsoftBaseClass {
        Color: string;
        IsBold: boolean;
        IsItalic: boolean;
        Name: string;
        Size: number;
      }

      class PageSetup extends WebsoftBaseClass {
        /**
         * Адаптировать содержимое по высоте под указанное количество страниц.
         */
        FitToPagesTall: number;

        /**
         * Адаптировать содержимое по ширине под указанное количество страниц.
         */
        FitToPagesWide: number;

        /**
         * Ориентация страницы. Допустимые значения: "Landscape" или "Portrait".
         */
        Orientation: "Landscape" | "Portrait";

        /**
         * Размер страницы для печати.
         */
        PaperSize: "PaperLetter"
        | "PaperLetterSmall"
        | "PaperTabloid"
        | "PaperLedger"
        | "PaperLegal"
        | "PaperStatement"
        | "PaperExecutive"
        | "PaperA3"
        | "PaperA4"
        | "PaperA4Small"
        | "PaperA5"
        | "PaperB4"
        | "PaperB5"
        | "PaperFolio"
        | "PaperQuarto"
        | "Paper10x14"
        | "Paper11x17"
        | "PaperNote"
        | "PaperEnvelope9"
        | "PaperEnvelope10"
        | "PaperEnvelope11"
        | "PaperEnvelope12"
        | "PaperEnvelope14"
        | "PaperCSheet"
        | "PaperDSheet"
        | "PaperESheet"
        | "PaperEnvelopeDL"
        | "PaperEnvelopeC5"
        | "PaperEnvelopeC3"
        | "PaperEnvelopeC4"
        | "PaperEnvelopeC6"
        | "PaperEnvelopeC65"
        | "PaperEnvelopeB4"
        | "PaperEnvelopeB5"
        | "PaperEnvelopeB6"
        | "PaperEnvelopeItaly"
        | "PaperEnvelopeMonarch"
        | "PaperEnvelopePersonal"
        | "PaperFanfoldUS"
        | "PaperFanfoldStdGerman"
        | "PaperFanfoldLegalGerman"
        | "PaperISOB4"
        | "PaperJapanesePostcard"
        | "Paper9x11"
        | "Paper10x11"
        | "Paper15x11"
        | "PaperEnvelopeInvite"
        | "PaperLetterExtra"
        | "PaperLegalExtra"
        | "PaperTabloidExtra"
        | "PaperA4Extra"
        | "PaperLetterTransverse"
        | "PaperA4Transverse"
        | "PaperLetterExtraTransverse"
        | "PaperSuperA"
        | "PaperSuperB"
        | "PaperLetterPlus"
        | "PaperA4Plus"
        | "PaperA5Transverse"
        | "PaperJISB5Transverse"
        | "PaperA3Extra"
        | "PaperA5Extra"
        | "PaperISOB5Extra"
        | "PaperA2"
        | "PaperA3Transverse"
        | "PaperA3ExtraTransverse"
        | "PaperJapaneseDoublePostcard"
        | "PaperA6"
        | "PaperJapaneseEnvelopeKaku2"
        | "PaperJapaneseEnvelopeKaku3"
        | "PaperJapaneseEnvelopeChou3"
        | "PaperJapaneseEnvelopeChou4"
        | "PaperLetterRotated"
        | "PaperA3Rotated"
        | "PaperA4Rotated"
        | "PaperA5Rotated"
        | "PaperJISB4Rotated"
        | "PaperJISB5Rotated"
        | "PaperJapanesePostcardRotated"
        | "PaperJapaneseDoublePostcardRotated"
        | "PaperA6Rotated"
        | "PaperJapaneseEnvelopeKaku2Rotated"
        | "PaperJapaneseEnvelopeKaku3Rotated"
        | "PaperJapaneseEnvelopeChou3Rotated"
        | "PaperJapaneseEnvelopeChou4Rotated"
        | "PaperJISB6"
        | "PaperJISB6Rotated"
        | "Paper12x11"
        | "PaperJapaneseEnvelopeYou4"
        | "PaperJapaneseEnvelopeYou4Rotated"
        | "PaperPRC16K"
        | "PaperPRC32K"
        | "PaperPRCBig32K"
        | "PaperPRCEnvelope1"
        | "PaperPRCEnvelope2"
        | "PaperPRCEnvelope3"
        | "PaperPRCEnvelope4"
        | "PaperPRCEnvelope5"
        | "PaperPRCEnvelope6"
        | "PaperPRCEnvelope7"
        | "PaperPRCEnvelope8"
        | "PaperPRCEnvelope9"
        | "PaperPRCEnvelope10"
        | "PaperPRC16KRotated"
        | "PaperPRC32KRotated"
        | "PaperPRCBig32KRotated"
        | "PaperPRCEnvelope1Rotated"
        | "PaperPRCEnvelope2Rotated"
        | "PaperPRCEnvelope3Rotated"
        | "PaperPRCEnvelope4Rotated"
        | "PaperPRCEnvelope5Rotated"
        | "PaperPRCEnvelope6Rotated"
        | "PaperPRCEnvelope7Rotated"
        | "PaperPRCEnvelope8Rotated"
        | "PaperPRCEnvelope9Rotated"
        | "PaperPRCEnvelope10Rotated"
        | "PaperB3"
        | "PaperBusinessCard";
      }

      class Range extends WebsoftBaseClass {
        CopyDataTo(str: string): Range;
        CopyStyleTo(str: string): Range;
        CopyTo(str: string): Range;
        CopyValueTo(str: string): Range;
      }

      class Row extends WebsoftBaseClass {
        Height: number;
      }

      class Rows extends WebsoftBaseClass {
        GetRow(index: number): Row;
      }

      class Style extends WebsoftBaseClass {
        /**
         * Границы ячейки.
         */
        Borders: Borders;

        /**
         * Свой шаблон формата данных ячейки.
         */
        Custom: string;

        /**
         * Цвет шрифта.
         */
        FontColor: string;

        /**
         * Название шрифта.
         */
        FontName: string;

        /**
         * Размер шрифта.
         */
        FontSize: number;

        /**
         * Цвет заливки.
         */
        ForegroundColor: string;

        /**
         * Выравнивание по горизонтали. Принимает значения "Left", "Right", "Center", "Justify".
         */
        HorizontalAlignment: "Left" | "Right" | "Center" | "Justify";

        /**
         * Ширность шрифта.
         */
        IsBold: boolean;

        /**
         * Курсив.
         */
        IsItalic: boolean;

        /**
         * Автоперенос текста.
         */
        IsTextWrapped: boolean;

        /**
         * Номер стиля и формата в таблице. Описание можно посмотреть тут: http://www.aspose.com/docs/display/cellsnet/Setting+Display+Formats+of+Numbers+and+Dates.
         */
        Number: number;

        /**
         * Выравнивание по вертикали. Принимает значения "Top", "Bottom", "Center".
         */
        VerticalAlignment: "Top" | "Bottom" | "Center";
      }

      /**
       * Лист книги Excel.
       */
      class Worksheet extends WebsoftBaseClass {
        /**
         * Свойство для управления ячейками листа.
         */
        Cells: Cells;

        /**
         * Наборы графиков.
         */
        Charts: Websoft.Office.Excel.Charts.ChartsCollection;


        /**
         * Название листа.
         */
        Name: string;

        /**
         * Параметры страницы.
         */
        PageSetup: PageSetup;

        /**
         * Набор изображений листа.
         */
        Pictures: Websoft.Office.Excel.Drawing.Pictures;

        /**
         * Создает новый набор графиков.
         * @deprecated
         * @param chartType - Тип графика.
         * @param left - Позиция по горизонтали.
         * @param top - Позиция по вертикали.
         * @param width - Ширинf.
         * @param height - Высота.
         */
        AddChart(
          chartType: string,
          left: number,
          top: number,
          width: number,
          height: number
        ): Websoft.Office.Excel.Charts.Chart;

        /**
         * Получает ячейку по указанному расположению
         * (устаревшее, вместо данной функции нужно использовать Cells.GetCell()).
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;
      }

      namespace Charts {
        class Axis extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Положение вертикальной оси между делениями.
           */
          AxisBetweenCategories: boolean;

          /**
           * Линия.
           */
          readonly AxisLine: Websoft.Office.Excel.Drawing.Line;

          /**
           * Номер категории пересечения вертикальной оси.
           */
          CrossAtt: number;

          /**
           * Тип пересечения вертикальной оси. Принимает значения "Automatic", "Maximum", "Custom".
           */
          CrossType: "Automatic" | "Maximum" | "Custom";

          /**
           * Основные деления.
           */
          MajorUnit: number;

          /**
           * Максимальное значение.
           */
          MaxValue: Object;

          /**
           * Промежуточные деления.
           */
          MinorUnit: number;

          /**
           * Минимальное значение.
           */
          MinValue: Object;

          /**
           * Положение подписей. Принимает значения "High", "Low", "NextToAxis", "None".
           */
          TickLabelPosition: "High" | "Low" | "NextToAxis" | "None";

          /**
           * Подписи к координатам.
           */
          readonly TickLabels: TickLabels;

          /**
           * Заголовок оси.
           */
          readonly Title: Websoft.Office.Excel.Charts.Title;
        }

        class Chart extends WebsoftBaseClass {
          /**
           * @deprecated
           * Цвет фона.
           * Рекомендуется использовать поля ChartArea.Area.BackgroundColor и PlotArea.Area.BackgroundColor.
           */
          BackgroundColor: string;

          /**
           * Ось X.
           */
          readonly CategoryAxis: Axis;

          /**
           * Данные категории (оси X для некоторых графиков).
           * Может устанавливаться в виде диапазона ячеек ("A1:B4") или набора данных ("{10,40,80}").
           * Важно! Этот параметр должен выставляться после добавления всех необходимых графиков к набору.
           */
          CategoryData: string;

          /**
           * Область диаграммы.
           */
          readonly ChartArea: ChartArea;

          /**
           * Таблица с данными.
           */
          readonly ChartDataTable: ChartDataTable;

          /**
           * Цвет фона области графика.
           */
          GridBackgroundColor: string;

          /**
           * Расположение легенды. Принимает значения "Top", "Left", "Right", "Bottom".
           */
          LegendPosition: "Top" | "Left" | "Right" | "Botton";

          /**
           * Область построения.
           */
          readonly PlotArea: PlotArea;

          /**
           * Показывать линии категории.
           */
          ShowCategoryGriglines: boolean;

          /**
           * Показывать таблицу с данными.
           */
          ShowDataTable: boolean;

          /**
           * Показывать легенду.
           */
          ShowLegend: boolean;

          /**
           * Показывать линии значений.
           */
          ShowValuesGriglines: boolean;
          /**
           * Заголовок.
           */
          readonly Title: Title;

          /**
           * Ось Y.
           */
          readonly ValueAxis: Axis;

          /**
           * Добавляет график.
           * @param chartType - Тип графика.
           * @param source - Источник данных.
           * @param isVertical - Следует ли строить график из диапазона значений ячеек по строкам или по столбцам.
           */
          AddSeries(
            chartType: string,
            source: string,
            isVertical: boolean
          ): Series;

          /**
           * Возвращает данные картинки в формате Base64.
           * @param imageFormat - Формат изображения (png, jpg и т.д.).
           */
          GetImageInBase64String(imageFormat: string): string;

          /**
           * Сохраняет набор графиков в виде изображения.
           * Формат изображения определяется по расширению в имени файла.
           */
          // eslint-disable-next-line no-magic-numbers
          ToImage(path: string): 1 | 0;
        }

        class ChartArea extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;
          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;
          /**
           * Высота.
           */
          Height: number;
          /**
           * Ширина.
           */
          Width: number;
        }

        class ChartDataTable extends WebsoftBaseClass {
          /**
           * Показывать горизонтальные границы.
           */
          HasBorderHorizontal: boolean;

          /**
           * Показывать внешние границы.
           */
          HasBorderOutline: boolean;

          /**
           * Показывать вертикальные границы.
           */
          HasBorderVertical: boolean;

          /**
           * Показывать значения легенды.
           */
          ShowLegendKey: boolean;
        }

        class ChartsCollection extends WebsoftBaseClass {
          /**
           * Количество наборов графиков в документе.
           */
          readonly Count: number;

          /**
           * Создает новый набор графиков.
           * @param chartType - Тип графика.
           * @param upperLeftRow - Номер левой верхней строки.
           * @param upperLeftColumn - Номер левой верхней колонки.
           * @param lowerRightRow - Номер нижней правой строки.
           * @param lowerRightColumn - Номер нижней правой колонки.
           */
          Add(
            chartType: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            lowerRightRow: number,
            lowerRightColumn: number
          ): Chart;

          /**
           * Создает новый набор графиков.
           * @param chartType - Тип графика.
           * @param left - Позиция по горизонтали.
           * @param top - Позиция по вертикали.
           * @param width - Ширина.
           * @param height - Высота.
           */
          AddFloatingChart(
            chartType: string,
            left: number,
            top: number,
            width: number,
            height: number
          ): Chart;
        }

        class DataLabels extends WebsoftBaseClass {
          /**
           * Шрифт подписей значений.
           */
          readonly Font: Font;

          /**
           * Формат данных. Например, "0.00%" для указания значения в процентах.
           */
          NumberFormat: string;

          /**
           * Расположение.
           * Принимает значения "Center", "InsideBase", "OutsideEnd", "Above", "Below", "Left", "Right", "BestFit", "Moved".
           * Разные значения доступны для разных типов графиков.
           */
          Position: "Center" | "InsideBase" | "OutsideEnd" | "Above" | "Below" | "Left" | "Right" | "BestFit" | "Moved";

          /**
           * Показывать название.
           */
          ShowSeriesName: boolean;

          /**
           * Показывать значение.
           */
          ShowValue: boolean;
        }

        class PlotArea extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;

          /**
           * Высота.
           */
          Height: number;

          /**
           * Ширина.
           */
          Width: number;
        }

        class Series extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;

          /**
           * Линии графика.
           */
          readonly DataLabels: DataLabels;

          /**
           * @deprecated
           * Цвет графика. Устаревшее. Рекомендуется использовать {@link Area.ForegroundColor}.
           */
          ForegroundColor: string;

          /**
           * Название графика.
           */
          Name: string;

          /**
           * Использовать сглаживание графика (только для линейного типа).
           */
          Smooth: boolean;

          /**
           * Значения по оси X.
           */
          XValues: string;

          /**
           * Добавляет линию тренда.
           * @param type - Тип линии тренда.
           */
          AddTrendLine(type: string): Trendline;
        }

        class TickLabels extends WebsoftBaseClass {
          /**
           * Шрифт подписей.
           */
          readonly Font: Font;

          /**
           * Формат данных. Например, "0.00%" для указания значения в процентах.
           */
          NumberFormat: string;

          /**
           * Угол поворота.
           */
          RotationAngle: number;

          /**
           * Направление текста. Принимает значения "Context", "LeftToRight", "RightToLeft".
           */
          TextDirection: "Context" | "LeftToRight" | "RightToLeft";
        }

        class Title extends WebsoftBaseClass {
          /**
           * Размер текста заголовка.
           */
          FontSize: number;

          /**
           * Является ли заголовок жирным.
           */
          IsBold: boolean;

          /**
           * Видимость заголовка.
           */
          IsVisible: boolean;

          /**
           * Угол поворота.
           */
          RotationAngle: number;

          /**
           * Текст заголовка.
           */
          Text: string;
        }

        class Trendline extends WebsoftBaseClass {
          /**
           * Прогноз назад (количество периодов).
           */
          Backward: number;

          /**
           * Цвет линии.
           */
          Color: string;

          /**
           * Показывать уравнение на диаграмме.
           */
          DisplayEquation: boolean;

          /**
           * Поместить на диаграмму величину достоверности аппроксимации (R^2).
           */
          DisplayRSquared: boolean;

          /**
           * Прогноз вперед (количество периодов).
           */
          Forward: number;

          /**
           * Название графика.
           */
          Name: string;

          /**
           * Толщина линии в point.
           */
          WeightPt: number;

          /**
           * Толщина линии в пикселях.
           */
          WeightPx: number;
        }
      }

      namespace Drawing {
        class Area extends WebsoftBaseClass {
          /**
           * Цвет фона.
           */
          BackgroundColor: string;

          /**
           * Стиль заливки заливки.
           */
          readonly FillFormat: FillFormat;

          /**
           * Цвет заливки.
           */
          ForegroundColor: string;

          /**
           * Прозрачность. Принимает значения от 0.0 до 1.0.
           */
          Transparency: number;
        }

        class FillFormat extends WebsoftBaseClass {
          /**
           * Цвет заливки 1.
           */
          readonly GradientColor1: string;

          /**
           * Цвет заливки 2.
           */
          readonly GradientColor2: string;

          /**
           * Угол градиента.
           */
          readonly GradientDegree: number;

          /**
           * Стиль градиента. Может принимать следующие значения: "DiagonalDown", "DiagonalUp", "FromCenter", "FromCorner", "Horizontal", "Vertical", "Unknown".
           */
          GradientStyle: "DiagonalDown" | "DiagonalUp" | "FromCenter" | "FromCorner" | "Horizontal" | "Vertical" | "Unknown";

          /**
           * Тип заливки.
           */
          Type: string;

          /**
           * Устанавливает градиентную заливку с одним цветом.
           * @param color - Цвет.
           * @param degree - Угол.
           * @param style - Стиль градиента. Может принимать следующие значения: "DiagonalDown", "DiagonalUp", "FromCenter", "FromCorner", "Horizontal", "Vertical", "Unknown".
           * @param variant - Вариации градиента. Может принимать значения от 1 до 4 в зависимости от типа градиента. Если стиль градиента "FromCenter", значения могут быть только 1 или 2.
           */
          SetOneColorGradient(
            color: string,
            degree: number,
            style: "DiagonalDown" | "DiagonalUp" | "FromCorner" | "Horizontal" | "Vertical" | "Unknown",
            // eslint-disable-next-line no-magic-numbers
            variant: 1 | 2 | 3 | 4
          // eslint-disable-next-line no-magic-numbers
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с одним цветом.
           * @param color - Цвет.
           * @param degree - Угол.
           * @param style - Стиль градиента. Может принимать следующие значения: "DiagonalDown", "DiagonalUp", "FromCenter", "FromCorner", "Horizontal", "Vertical", "Unknown".
           * @param variant - Вариации градиента. Может принимать значения от 1 до 4 в зависимости от типа градиента. Если стиль градиента "FromCenter", значения могут быть только 1 или 2.
           */
          SetOneColorGradient(
            color: string,
            degree: number,
            style: "FromCenter",
            // eslint-disable-next-line no-magic-numbers
            variant: 1 | 2
          // eslint-disable-next-line no-magic-numbers
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с двумя цветами.
           * @param color1 - Первый цвет.
           * @param transparency1 - Прозрачность первого цвета.
           * @param color2 - Второй цвет.
           * @param transparency2 - Прозрачность второго цвета.
           * @param style - Стиль градиента. Может принимать следующие значения: "DiagonalDown", "DiagonalUp", "FromCenter", "FromCorner", "Horizontal", "Vertical", "Unknown".
           * @param variant - Вариации градиента. Может принимать значения от 1 до 4 в зависимости от типа градиента. Если стиль градиента "FromCenter", значения могут быть только 1 или 2.
           */
          SetTwoColorGradient(
            color1: string,
            transparency1: number,
            color2: string,
            transparency2: number,
            style: "DiagonalDown" | "DiagonalUp" | "FromCorner" | "Horizontal" | "Vertical" | "Unknown",
            // eslint-disable-next-line no-magic-numbers
            variant: 1 | 2 | 3 | 4
            // eslint-disable-next-line no-magic-numbers
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с двумя цветами.
           * @param color1 - Первый цвет.
           * @param transparency1 - Прозрачность первого цвета.
           * @param color2 - Второй цвет.
           * @param transparency2 - Прозрачность второго цвета.
           * @param style - Стиль градиента. Может принимать следующие значения: "DiagonalDown", "DiagonalUp", "FromCenter", "FromCorner", "Horizontal", "Vertical", "Unknown".
           * @param variant - Вариации градиента. Может принимать значения от 1 до 4 в зависимости от типа градиента. Если стиль градиента "FromCenter", значения могут быть только 1 или 2.
           */
          SetTwoColorGradient(
            color1: string,
            transparency1: number,
            color2: string,
            transparency2: number,
            style: "FromCenter",
            // eslint-disable-next-line no-magic-numbers
            variant: 1 | 2
            // eslint-disable-next-line no-magic-numbers
          ): 1 | 0;
        }

        class Line extends WebsoftBaseClass {
          /**
           * Цвет.
           */
          Color: string;

          /**
           * Видимость.
           */
          IsVisible: boolean;

          /**
           * Стиль линии.
           * Принимает одно из следующих значений: "Solid", "Dash", "Dot", "DashDot", "DashDotDot", "DarkGray", "MediumGray", "LightGray".
           */
          Style: "Solid" | "Dash" | "Dot" | "DashDot" | "DashDotDot" | "DarkGray" | "MediumGray" | "LightGray";

          /**
           * Уровень прозрачности линии. Принимает значение от 0 (непрозрачная) до 1 (полностью прозрачная).
           */
          Transparency: number;

          /**
           * Толщина в поинтах.
           */
          WeightPt: number;

          /**
           * Толщина в пикселях.
           */
          WeightPx: number;
        }

        class Picture extends WebsoftBaseClass {
          /**
           * Высота картинки.
           */
          Height: number;

          /**
           * Ширина картинки.
           */
          Width: number;

          /**
           * Возвращает данные картинки в формате Base64.
           * @param imageFormat - Формат изображения (png, jpg и т.д.).
           */
          GetBase64String(imageFormat: string): string;

          /**
           * Сохраняет изображение по указанному пути.
           * @param filePath - Путь сохранения.
           */
          // eslint-disable-next-line no-magic-numbers
          SaveAs(filePath: string): 1 | 0;
        }

        class Pictures extends WebsoftBaseClass {
          /**
           * Добавляет в документ изображение без привязки размеров к ячейкам.
           * @param filePath - Путь до файла.
           * @param upperLeftRow - Номер верхней левой строки.
           * @param upperLeftColumn - Номер верхней левой колонки.
           * @param widthScale - Масштабирование по ширине (в процентах).
           * @param heightScale - Масштабирование по высоте (в процентах).
           */
          AddAbsolute(
            filePath: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            widthScale: number,
            heightScale: number
          ): Picture;

          /**
           * Добавляет в документ изображение с привязкой размеров к ячейкам.
           * @param filePath - Путь до файла.
           * @param upperLeftRow - Номер верхней левой строки.
           * @param upperLeftColumn - Номер верхней левой колонки.
           * @param lowerRightRow - Номер нижней правой строки.
           * @param lowerRightColumn - Номер нижней правой колонки.
           */
          AddRelative(
            filePath: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            lowerRightRow: number,
            lowerRightColumn: number
          ): Picture;

          /**
           * Получает изображение по индексу.
           * @param index - Индекс в наборе изображений листа.
           */
          Get(index: number): Picture;
        }
      }
    }
  }

  namespace RegExp {
    class Match {
      Default: string;
      FirstIndex: number;
      Length: number;
      Value: string;
      SubMatches(): SubMatches;
      SubMatches(index: number): string;
      ToString(): string;
    }

    class MatchCollection {
      Count: number;
      Item(index: number): Match;
    }

    class RegExp extends WebsoftBaseClass {
      Global: boolean;
      IgnoreCase: boolean;
      MultiLine: boolean;
      Pattern: string;
      Execute(source: string): MatchCollection;
      Execute(source: string, pattern: string): MatchCollection;
      IsMatch(source: string): boolean;
      Replace(source: string, repl: string): string;
    }

    class SubMatches {
      Count: number;
      Item(index: number): string;
    }
  }
}
