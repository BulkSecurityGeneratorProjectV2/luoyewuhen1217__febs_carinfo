$(function () {
    var $carInfoTableForm = $(".carInfo-table-form");
    var settings = {
        url: ctx + "carInfo/list",
        pageSize: 10,
        queryParams: function (params) {
            return {
                pageSize: params.limit,
                pageNum: params.offset / params.limit + 1,
                vehicleType: $carInfoTableForm.find("select[name='vehicleType']").val(),
                chassisTrademark: $carInfoTableForm.find("input[name='chassisTrademark']").val(),
                engineType: $carInfoTableForm.find("input[name='engineType']").val().trim(),
                squareQuantity: $carInfoTableForm.find("input[name='squareQuantity']").val(),
                remark: $carInfoTableForm.find("input[name='remark']").val(),
                manufacturer: $carInfoTableForm.find("input[name='manufacturer']").val()
            };
        },
        columns: [{
            checkbox: true
        }, {
            field: 'carId',
            title: '序号'
        }, {
            field: 'vehicleType',
            title: '车辆类型',
            formatter: function (value, row, index) {
                if (value === '0') return '油罐车';
                else if (value === '1') return '供液车';
                else if (value === '2') return '洒水车';
                else if (value === '3') return '冷藏车';
                else if (value === '4') return '吸污车';
                else if (value === '5') return '吸粪车';
                else if (value === '6') return '清洗吸污车';
                else if (value === '7') return '高空作业车';
                else if (value === '8') return '垃圾车';
                else if (value === '9') return '喷雾车-抑尘车';
                else if (value === '10') return '易燃液体厢式车';
                else if (value === '11') return '平板车';
                else if (value === '12') return '随车吊';
                else if (value === '13') return '搅拌车';
                else if (value === '14') return '粉罐车';
                else if (value === '15') return '防爆车';
                else if (value === '16') return '清障车';
                else if (value === '17') return '气瓶运输车';
                else if (value === '18') return '广告宣传车';
                else if (value === '19') return '售货车';
                else if (value === '20') return '扫路车';
                else if (value === '21') return '洗扫车';
                else if (value === '22') return '吸尘车';
                else if (value === '23') return '路面养护车';
                else if (value === '24') return '护栏清洗车';
                else if (value === '25') return '泵车';
                else if (value === '26') return '救护车';
                else if (value === '27') return '污水净化车';
                else if (value === '28') return '污水处理车';
                else if (value === '29') return '消防车';
                else if (value === '30') return '房车';
                else if (value === '31') return '仓栅车';
                else if (value === '32') return '载货车';
                else if (value === '33') return '升降平台车';
                else if (value === '34') return '自卸车';
                else if (value === '35') return '饲料车';
                else if (value === '36') return '校车';
                else if (value === '37') return '舞台车';
                else if (value === '38') return '轿运车';
                else return '无';
            }
        }, {
            field: 'chassisTrademark',
            title: '底盘品牌'
        }, {
            field: 'engineType',
            title: '发动机型号'
        }, {
            field: 'squareQuantity',
            title: '方量/箱体长度（米）/臂长'
        }, {
            field: 'volume1',
            title: '污水罐体容积（m³）'
        }, {
            field: 'volume2',
            title: '清水罐体容积（m³）'
        }, {
            field: 'vehiclesize',
            title: '整车尺寸/吨位'
        }, {
            field: 'dimension',
            title: '箱体尺寸'
        }, {
            field: 'waterside',
            title: '水方'
        }, {
            field: 'dusts',
            title: '尘方'
        }, {
            field: 'jobwidth',
            title: '作业宽度'
        }, {
            field: 'pumplength',
            title: '泵长'
        }, {
            field: 'number',
            title: '数量'
        }, {
            field: 'emissionStandard',
            title: '排放标准'
        }, {
            field: 'remark',
            title: '备注（轴距，轮胎等）'
        }, {
            field: 'manufacturer',
            title: '生产厂家'
        }, {
            field: 'contacts',
            title: '联系人'
        }, {
            field: 'tel',
            title: '联系电话'
        }, {
            field: 'address',
            title: '联系地址'
        }, {
            field: 'price',
            title: '售价/万'
        }
        ]
    };

    $MB.initTable('carInfoTable', settings);
});

function search() {
    $MB.refreshTable('carInfoTable');
}

function refresh() {
    $(".carInfo-table-form")[0].reset();
    $MB.refreshTable('carInfoTable');
}

function exportcarInfoExcel() {
    $.post(ctx + "carInfo/excel", $(".carInfo-table-form").serialize(), function (r) {
        if (r.code === 0) {
            window.location.href = "common/download?fileName=" + r.msg + "&delete=" + true;
        } else {
            $MB.n_warning(r.msg);
        }
    });
}

function exportcarInfoCsv() {
    $.post(ctx + "carInfo/csv", $(".carInfo-table-form").serialize(), function (r) {
        if (r.code === 0) {
            window.location.href = "common/download?fileName=" + r.msg + "&delete=" + true;
        } else {
            $MB.n_warning(r.msg);
        }
    });
}